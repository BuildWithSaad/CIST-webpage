import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { sdgFocusAreas } from '../../data/sdg';
import './SDGFocus.css';

const SDGFocus = () => {
  const [selectedId, setSelectedId] = useState(2);
  const selectedSDG = sdgFocusAreas.find((s) => s.id === selectedId);

  return (
    <section id="sdg" className="sdg-section">
      <div className="container">
        <SectionHeader preText="United Nations" highlightText="Sustainable Development Goals" />

        <p className="sdg-focused-intro">
          Out of 17 Sustainable Development Goals, KGRCET is mainly focused on the following areas:
        </p>

        <div className="sdg-layout">
          {/* ── Left column: SDG image + Details card ── */}
          <div className="sdg-left-col" data-aos="fade-right">
            <img
              src="/images/sdg/sdg-all.jpg"
              alt="United Nations 17 Sustainable Development Goals"
              className="sdg-overview-img"
            />

            {/* Details card (desktop) */}
            {selectedSDG && (
              <div
                className="sdg-details-card"
                key={selectedSDG.id}
                style={{ borderLeftColor: selectedSDG.color }}
              >
                <div className="sdg-details-header">
                  <img
                    src={selectedSDG.icon}
                    alt={`SDG ${selectedSDG.id}`}
                    className="sdg-details-icon"
                  />
                  <div>
                    <span
                      className="sdg-details-badge"
                      style={{ backgroundColor: selectedSDG.color }}
                    >
                      SDG {selectedSDG.id}
                    </span>
                    <h3
                      className="sdg-details-title"
                      style={{ color: selectedSDG.color }}
                    >
                      {selectedSDG.name}
                    </h3>
                  </div>
                </div>

                <p className="sdg-details-subtitle">{selectedSDG.subtitle}</p>

                <ul className="sdg-details-bullets">
                  {selectedSDG.bullets.map((b, i) => (
                    <li key={i} style={{ '--bullet-color': selectedSDG.color }}>
                      {b}
                    </li>
                  ))}
                </ul>

                {selectedSDG.focusArea && (
                  <span
                    className="sdg-focus-pill"
                    style={{
                      backgroundColor: `${selectedSDG.color}14`,
                      color: selectedSDG.color,
                      borderColor: `${selectedSDG.color}40`,
                    }}
                  >
                    CIST Focus: {selectedSDG.focusArea}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* ── Right column: clickable SDG list ── */}
          <div className="sdg-right-col" data-aos="fade-left">

            <div className="sdg-list" role="listbox" aria-label="Focused SDG list">
              {sdgFocusAreas.map((sdg, index) => (
                <button
                  key={sdg.id}
                  className={`sdg-list-item${selectedId === sdg.id ? ' sdg-list-item--selected' : ''}`}
                  onClick={() => setSelectedId(sdg.id)}
                  role="option"
                  aria-selected={selectedId === sdg.id}
                  style={{
                    '--sdg-color': sdg.color,
                    animationDelay: `${index * 0.06}s`,
                  }}
                >
                  <span
                    className="sdg-list-badge"
                    style={{ backgroundColor: sdg.color }}
                  >
                    {sdg.id}
                  </span>
                  <span className="sdg-list-name">{sdg.name}</span>
                  <img
                    src={sdg.icon}
                    alt=""
                    className="sdg-list-icon"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>

            {/* Details card (mobile — below list) */}
            {selectedSDG && (
              <div
                className="sdg-details-card sdg-details-card--mobile"
                key={`mobile-${selectedSDG.id}`}
                style={{ borderLeftColor: selectedSDG.color }}
              >
                <div className="sdg-details-header">
                  <img
                    src={selectedSDG.icon}
                    alt={`SDG ${selectedSDG.id}`}
                    className="sdg-details-icon"
                  />
                  <div>
                    <span
                      className="sdg-details-badge"
                      style={{ backgroundColor: selectedSDG.color }}
                    >
                      SDG {selectedSDG.id}
                    </span>
                    <h3
                      className="sdg-details-title"
                      style={{ color: selectedSDG.color }}
                    >
                      {selectedSDG.name}
                    </h3>
                  </div>
                </div>

                <p className="sdg-details-subtitle">{selectedSDG.subtitle}</p>

                <ul className="sdg-details-bullets">
                  {selectedSDG.bullets.map((b, i) => (
                    <li key={i} style={{ '--bullet-color': selectedSDG.color }}>
                      {b}
                    </li>
                  ))}
                </ul>

                {selectedSDG.focusArea && (
                  <span
                    className="sdg-focus-pill"
                    style={{
                      backgroundColor: `${selectedSDG.color}14`,
                      color: selectedSDG.color,
                      borderColor: `${selectedSDG.color}40`,
                    }}
                  >
                    CIST Focus: {selectedSDG.focusArea}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDGFocus;
