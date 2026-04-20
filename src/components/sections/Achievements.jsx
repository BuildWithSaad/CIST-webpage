import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { facultyAchievements, studentAchievements } from '../../data/achievements';
import { FiStar } from 'react-icons/fi';
import './Achievements.css';

const Achievements = () => {
  return (
    <section id="achievements" className="achievements-section">
      <div className="container">
        <SectionHeader preText="Achievements &" highlightText="Recognition" />
        
        <div className="achievements-content">
          {/* Faculty Achievements */}
          <div className="faculty-achievements mb-12">
            <h3 className="subsection-title">Faculty Achievements</h3>
            <div className="timeline-container">
              <div className="timeline-vertical-line"></div>
              {facultyAchievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="timeline-item" 
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-card">
                    <p>{achievement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Achievements */}
          <div className="student-achievements">
            <h3 className="subsection-title">Student Achievements</h3>
            <div className="student-grid">
              {studentAchievements.map((achievement, index) => (
                <div 
                  key={index} 
                  className="student-card"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="student-card-icon">
                    <FiStar />
                  </div>
                  <p>{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
