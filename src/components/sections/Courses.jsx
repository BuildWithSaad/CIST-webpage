import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeader from '../ui/SectionHeader';
import { courses } from '../../data/courses';
import { FiLayers, FiGlobe, FiZap, FiCpu, FiTrendingUp, FiTarget, FiSettings, FiAward } from 'react-icons/fi';
import './Courses.css';

gsap.registerPlugin(ScrollTrigger);

const filters = ['All', 'Year I', 'Year III', 'Year IV'];

/* Map each course ID to a thematic icon */
const courseIcons = {
  1: FiLayers,     // Design Thinking
  2: FiGlobe,      // Social Innovation
  3: FiZap,        // Sustainable Dev I
  4: FiTarget,     // Sustainable Dev II
  5: FiTrendingUp, // Rural Innovation I
  6: FiSettings,   // Rural Innovation II
  7: FiCpu,        // Engineering I
  8: FiAward,      // Engineering II
};

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    // Clear existing ScrollTriggers to prevent issues on re-renders (like filter changes)
    // but the user's specific request is for the section entrance.
    // If we want it to re-animate on filter change, we'd need to handle that.
    // For now, let's just do the section entrance.
    gsap.fromTo(".modern-course-card", 
      { y: 40, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6, 
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".courses-section",
          start: "top 80%",
          once: true
        }
      }
    );
  }, [activeFilter]); // Re-animate when filter changes for a smooth list transition

  const getYearAccent = (year) => {
    switch (year) {
      case 'I':   return 'accent-purple';
      case 'III': return 'accent-orange';
      case 'IV':  return 'accent-green';
      default:    return '';
    }
  };

  const getYearBadgeClass = (year) => {
    switch (year) {
      case 'I':   return 'badge-year-1';
      case 'III': return 'badge-year-3';
      case 'IV':  return 'badge-year-4';
      default:    return '';
    }
  };

  const filteredCourses = activeFilter === 'All'
    ? courses
    : courses.filter(c => `Year ${c.year}` === activeFilter);

  return (
    <section id="courses" className="courses-section">
      <div className="container courses-container">
        <SectionHeader preText="Courses" highlightText="Offered" />

        {/* Filters */}
        <div className="course-filters">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className="course-grid">
          {filteredCourses.map((course) => {
            const IconComp = courseIcons[course.id] || FiLayers;
            return (
              <div
                key={course.id}
                className={`modern-course-card course-card ${getYearAccent(course.year)}`}
              >
                {/* Colored top accent strip */}
                <div className="card-accent-strip"></div>

                {/* Badges row */}
                <div className="card-top">
                  <div className="card-badges">
                    <span className={`badge ${getYearBadgeClass(course.year)}`}>Year {course.year}</span>
                    <span className="badge badge-sem">Sem {course.semester}</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="card-icon-wrapper">
                  <IconComp />
                </div>

                {/* Body */}
                <div className="card-body">
                  <h3 className="course-title">{course.name}</h3>
                  <p className="course-description">{course.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Courses;
