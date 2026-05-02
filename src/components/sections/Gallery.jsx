import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { FiX } from 'react-icons/fi';
import './Gallery.css';

const galleryItems = [
  { image: "/images/gallery/gallery-1.jpg" },
  { image: "/images/gallery/gallery-2.jpg" },
  { image: "/images/gallery/gallery-3.jpg" },
  { image: "/images/gallery/gallery-4.jpg" },
  { image: "/images/gallery/gallery-5.jpg" },
  { image: "/images/gallery/gallery-6.jpg" },
  { image: "/images/gallery/gallery-7.jpg" },
  { image: "/images/gallery/gallery-8.jpg" },
  { image: "/images/gallery/gallery-9.jpg" },
  { image: "/images/gallery/gallery-10.jpg" },
  { image: "/images/gallery/gallery-11.jpg" },
  { image: "/images/gallery/gallery-12.jpg" },
  { image: "/images/gallery/gallery-13.jpg" },
  { image: "/images/gallery/gallery-14.jpg" }
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
        <SectionHeader highlightText="Gallery" />
        
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className="gallery-card"
              data-aos="fade-up"
              onClick={() => openLightbox(item)}
            >
              <img 
                src={item.image} 
                alt={`Gallery image ${index + 1}`} 
                className="gallery-image" 
                loading="lazy" 
              />
              <div className="gallery-overlay">
                <div className="gallery-icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="gallery-zoom-icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
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
              <img 
                src={selectedImage.image} 
                alt="Enlarged gallery view" 
                className="lightbox-image" 
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
