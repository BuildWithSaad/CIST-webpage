import React from 'react';
import GlassCard from '../ui/GlassCard';
import { FiEye, FiUploadCloud, FiCheckCircle } from 'react-icons/fi';
import './VisionMission.css';

const VisionMission = () => {
  return (
    <section id="vision" className="vision-section">
      <div className="container">
        <div className="vm-grid">
          <GlassCard className="vm-card vision-card" data-aos="fade-up" data-aos-delay="0">
            <div className="vision-bg-icon">
              <FiEye />
            </div>
            
            <div className="vm-header">
              <div className="vm-icon-wrapper purple-wrapper">
                <FiEye size={32} />
              </div>
              <div className="vm-title-wrapper">
                <h3 className="vm-title">Vision</h3>
                <div className="vm-accent-line"></div>
              </div>
            </div>
            
            <ul className="mission-list vision-list">
              <li>
                <FiCheckCircle className="check-icon" />
                <span>To become a recognized centre of Excellence that fosters an active ecosystem.</span>
              </li>
              <li>
                <FiCheckCircle className="check-icon" />
                <span>To promote community engagement, continuous innovation, and collaborative research.</span>
              </li>
              <li>
                <FiCheckCircle className="check-icon" />
                <span>To lead initiatives that drive sustainable socio-economic development in the community.</span>
              </li>
            </ul>

          </GlassCard>

          <GlassCard className="vm-card mission-card" data-aos="fade-up" data-aos-delay="200">
            <div className="vm-header">
              <div className="vm-icon-wrapper amber-wrapper">
                <FiUploadCloud size={32} />
              </div>
              <div className="vm-title-wrapper">
                <h3 className="vm-title">Mission</h3>
                <div className="vm-accent-line amber-line"></div>
              </div>
            </div>
            <ul className="mission-list">
              <li>
                <FiCheckCircle className="check-icon" />
                <span>To inspire faculty and students to become innovators and change makers who promote sustainable living and development in the community.</span>
              </li>
              <li>
                <FiCheckCircle className="check-icon" />
                <span>To facilitate reciprocal partnerships with rural communities through community-based learning experiences designed to identify and solve real-time problems.</span>
              </li>
              <li>
                <FiCheckCircle className="check-icon" />
                <span>To provide students with service-learning experiences in collaboration with non-profit organizations to develop student-driven innovations aimed to achieve the UN's Sustainable Development Goals.</span>
              </li>
              <li>
                <FiCheckCircle className="check-icon" />
                <span>To undertake research projects in partnership with local communities through community-based participatory research methods.</span>
              </li>
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
