import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { ReactComponent as MarkerIcon } from './assets/marker.svg'; // Import the SVG as a React component

// Function to determine marker color based on scoring gradient
const getMarkerColor = (parcel, showGradient) => {
    if (!showGradient) return '#000000'; // Default color (black)

    // Example logic for scoring gradient
    const score = parcel.LANDVAL; // Assuming LANDVAL is used for scoring
    if (score < 100000) return 'green';
    if (score < 500000) return 'yellow';
    return 'red';
};

const MapComponent = ({ parcels }) => {
    const [showGradient, setShowGradient] = useState(false);

    return (
        <div>
            <button onClick={() => setShowGradient(!showGradient)}>
                Toggle Scoring Gradient
            </button>
            <MapContainer center={[35.31836, -80.8322]} zoom={13} style={{ height: '100vh', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {parcels.map((parcel, index) => {
                    const markerColor = getMarkerColor(parcel, showGradient);

                    // Create a custom icon using the SVG with a dynamic fill color
                    const customIcon = L.divIcon({
                        className: 'custom-marker',
                        html: `<div style="width: 25px; height: 41px; display: flex; justify-content: center; align-items: center;">
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="fill: ${markerColor};">
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
                                    <p>Land Value: {parcel.LANDVAL}</p>
                                </div>
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>
        </div>
    );
};

export default MapComponent;