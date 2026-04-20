import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { courses } from '../../data/courses';
import './Courses.css';

const Courses = () => {
  const getYearBadgeClass = (year) => {
    switch (year) {
      case 'I': return 'badge-purple';
      case 'III': return 'badge-amber';
      case 'IV': return 'badge-green';
      default: return 'badge-primary';
    }
  };

  return (
    <section id="courses" className="courses-section">
      <div className="container">
        <SectionHeader preText="Courses" highlightText="Offered" />
        
        {/* Progression Timeline */}
        <div className="course-timeline" data-aos="fade-in">
          <div className="timeline-line"></div>
          <div className="timeline-nodes">
            <div className="timeline-node node-year-1">
              <span className="node-label">Year I</span>
            </div>
            <div className="timeline-node node-year-3">
              <span className="node-label">Year III</span>
            </div>
            <div className="timeline-node node-year-4">
              <span className="node-label">Year IV</span>
            </div>
          </div>
        </div>

        {/* Desktop Table View */}
        <div className="courses-table-container desktop-only" data-aos="fade-up">
          <table className="courses-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Course Name</th>
                <th>Year</th>
                <th>Semester</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td>{course.id}</td>
                  <td className="course-name-cell">
                    <strong>{course.name}</strong>
                    <p className="course-desc">{course.description}</p>
                  </td>
                  <td>
                    <span className={`badge ${getYearBadgeClass(course.year)}`}>
                      Year {course.year}
                    </span>
                  </td>
                  <td>Sem {course.semester}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="courses-cards-container mobile-only">
          {courses.map((course) => (
            <div key={course.id} className="course-card" data-aos="fade-up">
              <div className="course-card-header">
                <span className="course-serial">#{course.id}</span>
                <div className="course-badges">
                  <span className={`badge ${getYearBadgeClass(course.year)}`}>Year {course.year}</span>
                  <span className="badge badge-light">Sem {course.semester}</span>
                </div>
              </div>
              <h4 className="course-card-title">{course.name}</h4>
              <p className="course-card-desc">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
