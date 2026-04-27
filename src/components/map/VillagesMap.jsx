import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet with Webpack/Vite
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// Helper component to recenter map when filtered data changes
const MapCenterer = ({ markers }) => {
  const map = useMap();
  useEffect(() => {
    if (markers && markers.length > 0) {
      const bounds = L.latLngBounds(markers.map(m => m.coordinates));
      // Fly to bounds smoothly
      map.flyToBounds(bounds, { padding: [50, 50], maxZoom: 12, duration: 1.5 });
    } else {
      map.flyTo([17.5, 78.5], 8, { duration: 1.5 });
    }
  }, [markers, map]);
  return null;
};

const VillagesMap = ({ villages }) => {
  return (
    <div className="map-wrapper">
      <MapContainer 
        center={[17.5, 78.5]} 
        zoom={8} 
        scrollWheelZoom={false}
        className="villages-leaflet-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapCenterer markers={villages} />
        {villages.map((village, index) => (
          <Marker key={`${village.name}-${index}`} position={village.coordinates}>
            <Popup className="custom-popup">
              <div className="popup-content">
                <strong>{village.name}</strong>
                <span className="popup-district">{village.district}</span>
                {village.description && <p className="popup-desc">{village.description}</p>}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default VillagesMap;
