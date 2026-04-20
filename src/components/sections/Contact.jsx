import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import { useForm, ValidationError } from '@formspree/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiLinkedin, FiYoutube, FiTwitter, FiSend } from 'react-icons/fi';
import './Contact.css';
import 'leaflet/dist/leaflet.css';

// Fix leaflet icon issue in react
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const Contact = () => {
  const [state, handleSubmit] = useForm("xbjnqkzk"); // Use a dummy id for formspree
  
  const kgrcetCoords = [17.2847, 78.1824];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <SectionHeader preText="Get in" highlightText="Touch" />
        
        <div className="contact-grid">
          {/* Contact Info Card */}
          <div className="contact-info-col" data-aos="fade-right">
            <div className="contact-card gradient-purple">
              <h3 className="contact-card-title">Contact CIST</h3>
              
              <div className="contact-details">
                <div className="contact-item">
                  <FiPhone className="contact-icon" />
                  <span>+91 90006 33008</span>
                </div>
                
                <a href="mailto:info@kgr.ac.in" className="contact-item clickable">
                  <FiMail className="contact-icon" />
                  <span>info@kgr.ac.in</span>
                </a>
                
                <div className="contact-item">
                  <FiMapPin className="contact-icon" />
                  <span>Beside Moinabad PS, Chilkur (V), <br/>Moinabad (M), Hyderabad, Telangana</span>
                </div>
              </div>
              
              <div className="social-row mt-6">
                <a href="#" aria-label="Instagram"><FiInstagram /></a>
                <a href="#" aria-label="LinkedIn"><FiLinkedin /></a>
                <a href="#" aria-label="YouTube"><FiYoutube /></a>
                <a href="#" aria-label="Twitter"><FiTwitter /></a>
              </div>
            </div>

            <div className="map-container mt-6">
              <MapContainer center={kgrcetCoords} zoom={13} scrollWheelZoom={false} className="leaflet-map">
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={kgrcetCoords}>
                  <Popup>
                    KG Reddy College of Engineering & Technology
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-col" data-aos="fade-left">
            <div className="form-card">
              <h3 className="mb-6 font-bold text-2xl text-primary">Send a Message</h3>
              
              {state.succeeded ? (
                <div className="form-banner success">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              ) : null}

              {state.errors && state.errors.length > 0 ? (
                <div className="form-banner error">
                  ✗ Something went wrong. Please try again.
                </div>
              ) : null}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input id="name" type="text" name="name" required placeholder="John Doe" />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input id="email" type="email" name="email" required placeholder="john@example.com" />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input id="subject" type="text" name="subject" required placeholder="How can we help you?" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows="5" required placeholder="Your message here..."></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>
                
                <button type="submit" className="btn btn-filled btn-primary w-full" disabled={state.submitting}>
                  {state.submitting ? 'Sending...' : (
                    <>Send Message <FiSend /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
