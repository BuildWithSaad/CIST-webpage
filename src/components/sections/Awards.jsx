import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { awards } from '../../data/awards';
import { FaTrophy, FaStar, FaMedal, FaGlobe } from 'react-icons/fa';
import './Awards.css';

const Awards = () => {
  const getIcon = (iconStr) => {
    switch (iconStr) {
      case 'star': return <FaStar />;
      case 'medal': return <FaMedal />;
      case 'globe': return <FaGlobe />;
      default: return <FaTrophy />;
    }
  };

  return (
    <section id="awards" className="awards-section bg-dark">
      <div className="container">
        <SectionHeader preText="Awards &" highlightText="Recognition" theme="dark" />
        
        <div className="awards-scroller">
          <div className="awards-grid">
            {awards.map((award, index) => (
              <div 
                key={index} 
                className="award-card glassmorphism-dark"
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                <div className="award-icon amber-wrapper">
                  {getIcon(award.icon)}
                </div>
                
                <h3 className="award-title">{award.title}</h3>
                
                <div className="award-details">
                  <p className="awarded-to">
                    <span className="label">Awarded to:</span> <br/>
                    {award.awardedTo}
                  </p>
                  
                  <div className="award-meta">
                    <p>{award.organization}</p>
                    <p>{award.location}</p>
                  </div>
                </div>
                
                <div className="award-date badge badge-amber">
                  {award.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;
