import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      
      // Update active link based on scroll position
      const sections = ['home', 'about', 'courses', 'projects', 'team', 'activities', 'contact'];
      let currentSection = 'home';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if section is in top half of viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'courses', label: 'Courses' },
    { id: 'projects', label: 'Projects' },
    { id: 'team', label: 'Team' },
    { id: 'activities', label: 'Activities' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <img src="/cist-logo.png" alt="CIST Logo" className="logo-img placeholder-logo" />
          <span className="logo-text">CIST</span>
          <img src="/kgr-logo.png" alt="KGR Logo" className="logo-img placeholder-logo" />
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a 
                  href={`#${link.id}`} 
                  className={activeLink === link.id ? 'active' : ''}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-actions">
          <a href="https://kgr.ac.in" target="_blank" rel="noopener noreferrer" className="btn-admissions desktop-only">
            Join CIST
          </a>
          
          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={`#${link.id}`} 
                className={activeLink === link.id ? 'active' : ''}
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="https://kgr.ac.in" target="_blank" rel="noopener noreferrer" className="btn-admissions mobile-admissions" onClick={closeMobileMenu}>
              Join CIST
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
