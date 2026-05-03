import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import About from './components/sections/About';
import VisionMission from './components/sections/VisionMission';
import SDGFocus from './components/sections/SDGFocus';
import Courses from './components/sections/Courses';
import Partners from './components/sections/Partners';
import Villages from './components/sections/Villages';
import Projects from './components/sections/Projects';
import Awards from './components/sections/Awards';
import Team from './components/sections/Team';
import Activities from './components/sections/Activities';
import Gallery from './components/sections/Gallery';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Reveal animation for all sections
    const sections = document.querySelectorAll('section:not(#home)');
    
    sections.forEach(section => {
      // Section reveal
      gsap.fromTo(section, 
        { y: 80, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
            once: true
          }
        }
      );

      // Heading text reveal
      const headingTexts = section.querySelectorAll('.reveal-text');
      if (headingTexts.length > 0) {
        gsap.fromTo(headingTexts,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              once: true
            }
          }
        );
      }
    });
  }, []);

  useEffect(() => {
    const handleMouseEnter = (e) => {
      const card = e.target.closest('.project-card, .course-card, .activity-card');
      if (card) {
        gsap.to(card, {
          scale: 1.05,
          y: -5,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto"
        });
      }
    };

    const handleMouseLeave = (e) => {
      const card = e.target.closest('.project-card, .course-card, .activity-card');
      if (card) {
        gsap.to(card, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto"
        });
      }
    };

    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <VisionMission />
        <Awards />
        <SDGFocus />
        <Courses />
        <Partners />
        <Villages />
        <Projects />
        <Team />
        <Activities />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

export default App;
