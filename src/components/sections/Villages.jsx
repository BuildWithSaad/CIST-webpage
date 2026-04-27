import React, { Suspense, lazy } from 'react';
import SectionHeader from '../ui/SectionHeader';
import { useFilter } from '../../hooks/useFilter';
import { mapData } from '../../data/mapData';
import './Villages.css';

const VillagesMap = lazy(() => import('../map/VillagesMap'));

const districtDistricts = ["All", "Moinabad", "Kamareddy", "Suryapet", "Vikarabad"];

const Villages = () => {
  const { filterValue, setFilterValue, filtered, isEmpty } = useFilter(mapData, 'district');

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

        {/* Interactive Map */}
        <div className="map-container-outer">
          <Suspense fallback={<div className="map-loading">Loading Map...</div>}>
            {isEmpty ? (
              <div className="empty-state">
                <p>No villages found for this district.</p>
              </div>
            ) : (
              <VillagesMap villages={filtered} />
            )}
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Villages;
