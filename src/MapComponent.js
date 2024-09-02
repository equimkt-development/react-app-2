import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const MapComponent = ({ parcels, featureToggles }) => {
    return (
        <MapContainer center={[35.31836, -80.8322]} zoom={13} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {parcels.map((parcel, index) => {
                const customIcon = L.divIcon({
                    className: 'custom-marker',
                    html: `<div style="width: 25px; height: 41px; display: flex; justify-content: center; align-items: center;">
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="fill: black;">
                                   <path d="M50 0C33.432 0 20 13.432 20 30c0 20 30 70 30 70s30-50 30-70c0-16.568-13.432-30-30-30zm0 45c-8.284 0-15-6.716-15-15s6.716-15 15-15 15 6.716 15 15-6.716 15-15 15z"/>
                               </svg>
                           </div>`,
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                });

                return (
                    <Marker key={index} position={[parcel.lat, parcel.lon]} icon={customIcon}>
                        <Popup>
                            <div>
                                <h3>{parcel.PARUSEDESC}</h3>
                                {featureToggles.landValue && <p>Land Value: {parcel.LANDVAL}</p>}
                                {featureToggles.gisAcres && <p>GIS Acres: {parcel.GISACRES}</p>}
                                {featureToggles.valuePerAcre && <p>Value Per Acre: {parcel.VALUE_PER_ACRE}</p>}
                                {featureToggles.proximityScore && <p>Proximity Score: {parcel.PROXIMITY_SCORE}</p>}
                                {featureToggles.trafficScore && <p>Traffic Score: {parcel.TRAFFIC_SCORE}</p>}
                                {featureToggles.landValueScore && <p>Land Value Score: {parcel.LAND_VALUE_SCORE}</p>}
                                {featureToggles.combinedScore && <p>Combined Score: {parcel.COMBINED_SCORE}</p>}
                            </div>
                        </Popup>
                    </Marker>
                );
            })}
        </MapContainer>
    );
};

export default MapComponent;