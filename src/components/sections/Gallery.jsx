import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { FiMaximize2, FiX } from 'react-icons/fi';
import './Gallery.css';

const galleryItems = [
  "Village Visit — Sriram Nagar",
  "Agricultural Problem Scoping",
  "Community Interaction — Kamareddy",
  "Award Ceremony — Sydney 2024",
  "Student Teams — KGRCET Conference",
  "IIT Madras — Lab2Market 2024",
  "Solar Fencing Deployment",
  "IoT Cooling Chamber — Surangal",
  "STEM Activities",
  "NGO Partnership Visit",
  "Hackathon — G Narayanamma Institute",
  "Village Visit — Bheelya Nayak Thanda"
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <SectionHeader preText="Photo" highlightText="Gallery" />
        
        <div className="masonry-grid">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className={`masonry-item ${index % 5 === 0 || index % 7 === 0 ? 'tall' : ''} ${index % 4 === 0 ? 'wide' : ''}`}
              data-aos="fade-up"
              onClick={() => openLightbox(item)}
            >
              <div className="gallery-placeholder">
                <span className="placeholder-text">{item}</span>
              </div>
              <div className="gallery-overlay">
                <FiMaximize2 className="expand-icon" size={32} />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="lightbox active" onClick={closeLightbox}>
            <button className="lightbox-close" onClick={closeLightbox}>
              <FiX size={32} />
            </button>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <div className="lightbox-image-placeholder">
                <h2>{selectedImage}</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
