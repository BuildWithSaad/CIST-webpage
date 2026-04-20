import React from 'react';
import { useIntersection } from '../../hooks/useIntersection';
import { useCounter } from '../../hooks/useCounter';
import { stats } from '../../data/stats';
import { FiMapPin, FiBriefcase, FiDollarSign, FiUsers, FiAward, FiUserPlus } from 'react-icons/fi';
import './Stats.css';

const icons = {
  "Partnered Villages": <FiMapPin />,
  "Funded Projects": <FiBriefcase />,
  "Total Funding": <FiDollarSign />,
  "MoU Partners": <FiUsers />,
  "Awards Received": <FiAward />,
  "Team Members": <FiUserPlus />
};

const StatCard = ({ stat, hasStarted, index }) => {
  const count = useCounter(stat.value, 2000, hasStarted);

  return (
    <div className="stat-card" data-aos="fade-up" data-aos-delay={index * 100}>
      <div className="stat-icon">
        {icons[stat.label]}
      </div>
      <div className="stat-number">
        {stat.prefix}{count}{stat.suffix}
      </div>
      <div className="stat-label">
        {stat.label}
      </div>
    </div>
  );
};

const Stats = () => {
  const { ref, hasBeenVisible } = useIntersection({ threshold: 0.2 });

  return (
    <section id="stats" className="stats-section bg-primary" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <StatCard 
              key={index} 
              stat={stat} 
              hasStarted={hasBeenVisible} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
