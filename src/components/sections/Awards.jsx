import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { awards } from '../../data/awards';
import { FaTrophy, FaStar, FaMedal, FaGlobe } from 'react-icons/fa';
import './Awards.css';

const AwardCard = ({ award, index }) => {
  const [flipped, setFlipped] = useState(false);

  const getIcon = (iconStr) => {
    switch (iconStr) {
      case 'star': return <FaStar />;
      case 'medal': return <FaMedal />;
      case 'globe': return <FaGlobe />;
      default: return <FaTrophy />;
    }
  };

  return (
    <div
      className={`award-flip-container ${flipped ? 'flipped' : ''}`}
    >
      <div className="award-flip-inner">

        {/* ===== FRONT ===== */}
        <div className="award-front">
          <div className="award-front-image">
            <img src={award.image} alt={award.title} loading="lazy" />
          </div>
          <div className="award-front-content">
            <div className="award-front-icon">{getIcon(award.icon)}</div>
            <h3 className="award-front-title">{award.title}</h3>
            <span className="award-front-date">{award.date}</span>
            <button
              className="award-view-btn"
              onClick={() => setFlipped(true)}
            >
              View Achievement
            </button>
          </div>
        </div>

        {/* ===== BACK ===== */}
        <div className="award-back">
          <div className="award-back-icon">{getIcon(award.icon)}</div>
          <h3 className="award-back-title">{award.title}</h3>

          <div className="award-back-details">
            <div className="award-back-row">
              <span className="award-back-label">Awarded To</span>
              <span className="award-back-value">{award.awardedTo}</span>
            </div>
            <div className="award-back-row">
              <span className="award-back-label">Designation</span>
              <span className="award-back-value">{award.designation}</span>
            </div>
            <div className="award-back-row">
              <span className="award-back-label">Organization</span>
              <span className="award-back-value">{award.organization}</span>
            </div>
            <div className="award-back-row">
              <span className="award-back-label">Location</span>
              <span className="award-back-value">{award.location}</span>
            </div>
            <div className="award-back-row">
              <span className="award-back-label">Date</span>
              <span className="award-back-value">{award.date}</span>
            </div>
          </div>

          <button
            className="award-back-btn"
            onClick={() => setFlipped(false)}
          >
            ← Back
          </button>
        </div>

      </div>
    </div>
  );
};

const Awards = () => {
  const featuredAward = awards[0];
  const otherAwards = awards.slice(1);

  return (
    <section id="awards" className="awards-section">
      {/* Background layers */}
      <div className="awards-bg-diamonds"></div>
      <div className="awards-bg-glow-diamonds"></div>
      <div className="awards-bg-diamond-scatter"></div>
      <div className="awards-bg-diamond-cluster"></div>
      <div className="awards-bg-arc"></div>
      <div className="awards-bg-gradient"></div>

      {/* Content */}
      <div className="container awards-content">
        <SectionHeader preText="Awards &" highlightText="Recognition" theme="dark" />

        {/* Featured Award - Large */}
        <div className="awards-featured">
          <AwardCard award={featuredAward} index={0} />
        </div>

        {/* Other Awards - Row of 3 */}
        <div className="awards-grid-bottom">
          {otherAwards.map((award, index) => (
            <AwardCard key={index + 1} award={award} index={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
