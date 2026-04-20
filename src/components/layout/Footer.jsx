import React from 'react';
import { FiInstagram, FiLinkedin, FiYoutube, FiTwitter } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1 */}
          <div className="footer-col brand-col">
            <h3 className="footer-logo">CIST</h3>
            <p className="tagline">Innovating for Communities. Engineering for Humanity.</p>
            <p className="institution-name">KG Reddy College of Engineering & Technology</p>
            <p className="institution-status">An Autonomous Institution</p>
            <span className="badge badge-primary mt-2">EAPCET Code: KGRH</span>
          </div>

          {/* Column 2 */}
          <div className="footer-col links-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#activities">Activities</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="footer-col contact-col">
            <h4>Contact</h4>
            <p>+91 90006 33008</p>
            <p>info@kgr.ac.in</p>
            <p>Beside Moinabad PS, Chilkur (V),<br />Moinabad (M), Hyderabad, Telangana</p>
            <div className="social-links mt-4">
              <a href="#" aria-label="Instagram"><FiInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href="#" aria-label="YouTube"><FiYoutube /></a>
              <a href="#" aria-label="Twitter"><FiTwitter /></a>
            </div>
          </div>

          {/* Column 4 */}
          <div className="footer-col programs-col">
            <h4>Programs</h4>
            <ul>
              <li><a href="https://kgr.ac.in" target="_blank" rel="noopener noreferrer">CSE</a></li>
              <li><a href="https://kgr.ac.in" target="_blank" rel="noopener noreferrer">CSE-AIML</a></li>
              <li><a href="https://kgr.ac.in" target="_blank" rel="noopener noreferrer">CSE Data Science</a></li>
              <li><a href="https://kgr.ac.in" target="_blank" rel="noopener noreferrer">ECE</a></li>
              <li><a href="https://kgr.ac.in" target="_blank" rel="noopener noreferrer">Mechanical</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 CIST — KG Reddy College of Engineering & Technology. All Rights Reserved.</p>
          <p>EAPCET Code: KGRH | Autonomous Institution</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
