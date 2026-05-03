import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import GlassCard from '../ui/GlassCard';
import Badge from '../ui/Badge';
import { partners } from '../../data/partners';
import './Partners.css';

const Partners = () => {
  return (
    <section id="partners" className="partners-section">
      <div className="container">
        <SectionHeader preText="Our" highlightText="Partners" />
        
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <GlassCard key={index} className="partner-card">
              <div className="partner-logo-container">
                <img src={partner.logo} alt={`${partner.name} logo`} className="partner-logo" />
              </div>
              <h3 className="partner-name">{partner.name}</h3>
              <p className="partner-area">{partner.area}</p>
              <p className="partner-desc">{partner.description}</p>
              <div className="mt-auto pt-4">
                <Badge label="MoU Signed" color="green" />
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
