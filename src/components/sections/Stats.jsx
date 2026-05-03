import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useIntersection } from '../../hooks/useIntersection';
import { useCounter } from '../../hooks/useCounter';
import { stats } from '../../data/stats';
import { FiMapPin, FiBriefcase, FiDollarSign, FiUsers, FiAward, FiUserPlus } from 'react-icons/fi';
import './Stats.css';

gsap.registerPlugin(ScrollTrigger);

const icons = {
  "Partnered Villages": <FiMapPin />,
  "Funded Projects": <FiBriefcase />,
  "Total Funding": <FiDollarSign />,
  "MoU Partners": <FiUsers />,
  "Awards Received": <FiAward />,
  "Team Members": <FiUserPlus />
};

const StatCard = ({ stat, hasStarted }) => {
  const count = useCounter(stat.value, 2000, hasStarted);

  return (
    <div className="stat-card">
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

  useEffect(() => {
    gsap.fromTo(".stat-card", 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
          once: true
        }
      }
    );
  }, []);

  return (
    <section id="stats" className="stats-section bg-primary" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <StatCard 
              key={index} 
              stat={stat} 
              hasStarted={hasBeenVisible} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
