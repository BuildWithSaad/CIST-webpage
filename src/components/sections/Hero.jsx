import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { sdgFocusAreas } from '../../data/sdg';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      
      <div className="container hero-container relative">
        <div className="hero-content" data-aos="fade-up">
          <div className="mb-4 text-center">
            <Badge label="KG Reddy College of Engineering & Technology | KGRH" color="secondary" />
          </div>
          
          <h1 className="hero-title">
            Centre for Innovation & <br />
            <span className="text-secondary">Social Transformation</span>
          </h1>
          
          <p className="hero-subtitle">
            Innovating for Communities. Engineering for Humanity.
          </p>
          
          <div className="hero-buttons">
            <Button href="#projects" variant="filled" color="primary">
              Explore Projects
            </Button>
            <Button href="#team" variant="outlined" color="primary">
              Meet Our Team
            </Button>
          </div>
        </div>

        <div className="scroll-indicator bounce">
          <a href="#stats" aria-label="Scroll down">
            <FiChevronDown size={32} />
          </a>
        </div>
      </div>

      <div className="sdg-rainbow-bar">
        {sdgFocusAreas.map((sdg, index) => (
          <div 
            key={sdg.id} 
            className="sdg-segment" 
            style={{ 
              backgroundColor: sdg.color,
              animationDelay: `${index * 0.1}s` 
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
