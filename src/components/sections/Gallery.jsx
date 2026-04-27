import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { FiX } from 'react-icons/fi';
import './Gallery.css';

const galleryItems = [
  { image: "/images/gallery/gallery-5.jpg" },
  { image: "/images/gallery/gallery-6.jpg" },
  { image: "/images/gallery/gallery-7.jpg" },
  { image: "/images/gallery/gallery-8.jpg" },
  { image: "/images/gallery/gallery-9.jpg" },
  { image: "/images/gallery/gallery-10.jpg" },
  { image: "/images/gallery/gallery-11.jpg" },
  { image: "/images/gallery/gallery-12.jpg" }
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
