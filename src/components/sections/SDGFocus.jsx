import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { sdgFocusAreas } from '../../data/sdg';
import './SDGFocus.css';

const SDGFocus = () => {
  return (
    <section id="sdg" className="sdg-section">
      <div className="container">
        <SectionHeader preText="United Nations" highlightText="Sustainable Development Goals" />

        <div className="sdg-layout">
          {/* Left - SDG Overview Image */}
          <div className="sdg-overview" data-aos="fade-right">
            <img
              src="/images/sdg/sdg-all.jpg"
              alt="United Nations 17 Sustainable Development Goals"
              className="sdg-overview-img"
            />
          </div>

          {/* Right - Focused SDGs Table */}
          <div className="sdg-focused" data-aos="fade-left">
            <p className="sdg-focused-intro">
              Out of 17 Sustainable Development Goals, KGRCET is mainly focused on the following areas:
            </p>
            <div className="sdg-table-wrapper">
              <table className="sdg-table">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>United Nations Sustainable Development Goals</th>
                  </tr>
                </thead>
                <tbody>
                  {sdgFocusAreas.map((sdg, index) => (
                    <tr key={sdg.id}>
                      <td className="sdg-table-sno">{index + 1}</td>
                      <td className="sdg-table-name">
                        <img
                          src={sdg.icon}
                          alt={`SDG ${sdg.id} - ${sdg.name}`}
                          className="sdg-icon"
                        />
                        {sdg.name}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SDGFocus;
