import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { FiMap, FiGlobe, FiZap, FiCheck } from 'react-icons/fi';
import './Activities.css';

const Activities = () => {
  const outreach = [
    "Village Visits for Problem Scoping",
    "NGO Visits",
    "Gnanshodh with Palle Srujana"
  ];
  
  const sdg = [
    "EWB Student Chapter Activities",
    "UBA Activities",
    "STEM Activities"
  ];
  
  const extension = [
    "Ideathon & Hackathon for CIST Courses",
    "SDG-Related Events",
    "Sahyog with KASE"
  ];

  return (
    <section id="activities" className="activities-section bg-dark">
      <div className="container">
        <SectionHeader preText="Activities" highlightText="Undertaken by CIST" theme="dark" />
        
        <div className="activities-grid mt-12">
          {/* Column 1 */}
          <div className="activity-col" data-aos="fade-up" data-aos-delay="0">
            <div className="act-icon-wrapper act-purple">
              <FiMap size={32} />
            </div>
            <h3 className="act-title">Outreach Programs</h3>
            <ul className="act-list">
              {outreach.map((item, idx) => (
                <li key={idx}><FiCheck className="act-check text-primary" /> <span>{item}</span></li>
              ))}
            </ul>
          </div>
          
          {/* Column 2 */}
          <div className="activity-col" data-aos="fade-up" data-aos-delay="200">
            <div className="act-icon-wrapper act-green">
              <FiGlobe size={32} />
            </div>
            <h3 className="act-title">SDG Related</h3>
            <ul className="act-list">
              {sdg.map((item, idx) => (
                <li key={idx}><FiCheck className="act-check text-green" /> <span>{item}</span></li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="activity-col" data-aos="fade-up" data-aos-delay="400">
            <div className="act-icon-wrapper act-amber">
              <FiZap size={32} />
            </div>
            <h3 className="act-title">Extension Activities</h3>
            <ul className="act-list">
              {extension.map((item, idx) => (
                <li key={idx}><FiCheck className="act-check text-secondary" /> <span>{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
