import React, { useState, useEffect, useRef } from 'react';
import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';
import { fundedProjects, deployedProjects, ongoingProjects } from '../../data/projects';
import { FiMapPin } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const tabs = ["All", "Funded", "Deployed", "Ongoing"];
  const [activeTab, setActiveTab] = useState("All");

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Deployed': return <Badge label={status} color="green" />;
      case 'Ongoing': return <Badge label={status} color="amber" />;
      case 'PoC Done': return <Badge label={status} color="blue" />;
      case 'Prototype Tested': return <Badge label={status} color="purple" />;
      default: return <Badge label={status} color="primary" />;
    }
  };

  const FundedTable = () => (
    <div className="projects-table-container fade-in">
      <table className="projects-table">
        <thead>
          <tr>
            <th>Investigator</th>
            <th>Project Title</th>
            <th>Funded By</th>
            <th>Year</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {fundedProjects.map((proj, idx) => (
            <tr key={idx}>
              <td>{proj.investigator}</td>
              <td className="proj-title-cell">{proj.title}
                {proj.village && <span className="proj-village-sm"><FiMapPin /> {proj.village}</span>}
              </td>
              <td>{proj.agency}</td>
              <td>{proj.year || '—'}</td>
              <td>{proj.amount}</td>
              <td>{getStatusBadge(proj.status)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const DeployedGrid = () => (
    <div className="flip-cards-grid fade-in">
      {deployedProjects.map((proj, idx) => (
        <div key={idx} className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h4>{proj.title}</h4>
              <p className="hint-text">Hover to see village &rarr;</p>
            </div>
            <div className="flip-card-back">
              <FiMapPin size={32} className="mb-4 text-secondary" />
              <h3 className="text-secondary">{proj.village}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const OngoingGrid = () => {
    return (
      <div className="ongoing-grid fade-in">
        {ongoingProjects.map((proj, idx) => (
          <ProgressBarCard key={idx} proj={proj} index={idx} />
        ))}
      </div>
    );
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <SectionHeader preText="Our" highlightText="Projects" />
        
        <div className="filter-tabs">
          {tabs.map(tab => (
            <button 
              key={tab}
              className={`filter-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="projects-content">
          {activeTab === "All" && (
            <div className="all-projects-view">
              <h3 className="category-title mt-0">Funded Projects</h3>
              <FundedTable />
              
              <h3 className="category-title">Deployed Projects</h3>
              <DeployedGrid />
              
              <h3 className="category-title">Ongoing Projects</h3>
              <OngoingGrid />
            </div>
          )}
          {activeTab === "Funded" && <FundedTable />}
          {activeTab === "Deployed" && <DeployedGrid />}
          {activeTab === "Ongoing" && <OngoingGrid />}

          {((activeTab === 'Funded' && fundedProjects.length === 0) ||
            (activeTab === 'Deployed' && deployedProjects.length === 0) ||
            (activeTab === 'Ongoing' && ongoingProjects.length === 0)) && (
            <div className="empty-state">
              <p>No projects in this category yet</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const ProgressBarCard = ({ proj, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });

    if (ref.current) observer.observe(ref.current);
    
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div className="progress-card" ref={ref}>
      <h4 className="progress-title">{proj.title}</h4>
      <p className="progress-village"><FiMapPin /> {proj.village}</p>
      
      <div className="progress-bar-container">
        <div 
          className="progress-bar-fill"
          style={{ width: isVisible ? `${proj.progress}%` : '0%' }}
        ></div>
      </div>
      <div className="progress-label">{proj.progress}% Complete</div>
    </div>
  );
};

export default Projects;
