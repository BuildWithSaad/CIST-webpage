import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';
import { useFilter } from '../../hooks/useFilter';
import { villages } from '../../data/villages';
import { FiMapPin } from 'react-icons/fi';
import './Villages.css';

const districtDistricts = ["All", "Moinabad", "Kamareddy", "Suryapet", "Vikarabad"];

const getDistrictColor = (district) => {
  switch (district) {
    case 'Moinabad': return 'purple';
    case 'Kamareddy': return 'amber';
    case 'Suryapet': return 'green';
    case 'Vikarabad': return 'blue';
    default: return 'primary';
  }
};

const Villages = () => {
  const { filterValue, setFilterValue, filtered, isEmpty } = useFilter(villages, 'district');

  return (
    <section id="villages" className="villages-section">
      <div className="container">
        <SectionHeader preText="Partnered" highlightText="Villages" />
        
        <p className="text-center text-muted mb-8 max-w-3xl mx-auto text-lg">
          CIST has partnered with 15 villages across 4 districts to enrich students in a socially responsible way and apply academic knowledge to social causes.
        </p>

        <div className="filter-tabs">
          {districtDistricts.map(tab => (
            <button 
              key={tab}
              className={`filter-tab ${filterValue === tab ? 'active' : ''}`}
              onClick={() => setFilterValue(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="villages-grid">
          {filtered.map((village, index) => (
            <div 
              key={index} 
              className={`village-card district-${getDistrictColor(village.district)} fade-in`}
            >
              <div className="village-icon">
                <FiMapPin size={24} />
              </div>
              <h4 className="village-name">{village.name}</h4>
              <Badge label={village.district} color={getDistrictColor(village.district)} />
            </div>
          ))}
          {isEmpty && (
            <div className="empty-state">
              <p>No villages found for this district.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Villages;
