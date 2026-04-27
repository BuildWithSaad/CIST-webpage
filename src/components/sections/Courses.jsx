import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { courses } from '../../data/courses';
import './Courses.css';

const filters = ['All', 'Year I', 'Year III', 'Year IV'];

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const getYearBadgeClass = (year) => {
    switch (year) {
      case 'I': return 'badge-year-1';
      case 'III': return 'badge-year-3';
      case 'IV': return 'badge-year-4';
      default: return '';
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
        <div className="course-filters" data-aos="fade-up">
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
          {filteredCourses.map((course, index) => (
            <div 
              key={course.id} 
              className="modern-course-card" 
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card-top">
                <span className="course-number">#{course.id}</span>
                <div className="card-badges">
                  <span className={`badge ${getYearBadgeClass(course.year)}`}>Year {course.year}</span>
                  <span className="badge badge-sem">Sem {course.semester}</span>
                </div>
              </div>
              <div className="card-body">
                <h3 className="course-title">{course.name}</h3>
                <p className="course-description">{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
