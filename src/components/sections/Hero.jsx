import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiChevronDown, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Badge from '../ui/Badge';
import { sdgFocusAreas } from '../../data/sdg';
import './Hero.css';

gsap.registerPlugin(ScrollTrigger);

const heroImages = [
  '/images/hero/hero-1.jpg',
  '/images/hero/hero-2.jpg',
  '/images/hero/hero-3.jpg',
  '/images/hero/hero-4.jpg'
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Entrance Animation
    const tl = gsap.timeline();

    tl.fromTo(".hero-title", 
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(".hero-subtitle",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      0.3
    )
    .fromTo(".hero-buttons",
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "power3.out" },
      0.5
    );

    // Parallax Animation
    gsap.to(".hero-bg-slide", {
      y: 100,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    gsap.to(".hero-content-wrapper", {
      y: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }, []);

  useEffect(() => {
    // Cross-fade slides
    const slides = document.querySelectorAll('.hero-bg-slide');
    
    slides.forEach((slide, index) => {
      if (index === currentImage) {
        // Fade in active slide
        gsap.to(slide, {
          opacity: 1,
          duration: 1.5,
          ease: "power2.inOut",
          zIndex: 1
        });
        
        // Ken Burns zoom effect
        gsap.fromTo(slide.querySelector('.hero-bg-img'),
          { scale: 1.15 },
          { scale: 1.05, duration: 6, ease: "linear" }
        );
      } else {
        // Fade out inactive slides
        gsap.to(slide, {
          opacity: 0,
          duration: 1.5,
          ease: "power2.inOut",
          zIndex: 0
        });
      }
    });
  }, [currentImage]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Increased slightly for smoother feel
    return () => clearInterval(timer);
  }, [isPaused, currentImage]);

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section
      id="home"
      className="hero-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background slideshow — using <img> for better format compatibility */}
      {heroImages.map((imgSrc, index) => (
        <div
          key={index}
          className={`hero-bg-slide hero-bg-slide-${index}`}
        >
          <img
            src={imgSrc}
            alt=""
            className="hero-bg-img"
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        </div>
      ))}

      {/* Strong dark gradient overlay */}
      <div className="hero-overlay"></div>

      {/* Navigation Arrows */}
      <button className="hero-nav-arrow left" onClick={handlePrev} aria-label="Previous image">
        <FiChevronLeft size={36} />
      </button>
      <button className="hero-nav-arrow right" onClick={handleNext} aria-label="Next image">
        <FiChevronRight size={36} />
      </button>

      {/* Content */}
      <div className="hero-content-wrapper">
        <h1 className="hero-title">
          <span className="hero-gold">Centre For Innovation</span>
          <br />
          <span className="hero-white">And Social Transformation</span>
        </h1>

        <p className="hero-subtitle">
          Driving Innovation for Social Impact
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="hero-btn hero-btn-gold">
            Explore Projects
          </a>
          <a href="#team" className="hero-btn hero-btn-outline">
            Meet Our Team
          </a>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="hero-dots-container">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${index === currentImage ? 'active' : ''}`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator bounce">
        <a href="#stats" aria-label="Scroll down">
          <FiChevronDown size={32} />
        </a>
      </div>

      {/* SDG Rainbow bar */}
      <div className="sdg-rainbow-bar">
        {sdgFocusAreas.map((sdg, index) => (
          <div
            key={sdg.id}
            className="sdg-segment"
            style={{
              backgroundColor: sdg.color,
              animationDelay: `${index * 0.1}s`
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
