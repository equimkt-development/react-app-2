import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = ({ parcels }) => {
    const [showGradient, setShowGradient] = useState(false);

    const style = (feature) => ({
        fillColor: showGradient ? getColor(feature.properties.score) : '#ffffff',
        weight: 1,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.7,
    });

    const getColor = (score) => {
        // Define color based on score
        return score > 75 ? '#ff0000' : score > 50 ? '#ffcc00' : '#00ff00';
    };

    return (
        <div>
            <button onClick={() => setShowGradient(!showGradient)}>
                Toggle Scoring Gradient
            </button>
            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <GeoJSON data={parcels} style={style}>
                    <Tooltip>
                        {/* Display data points for selected parcels */}
                        <span>{/* Parcel data here */}</span>
                    </Tooltip>
                </GeoJSON>
            </MapContainer>
        </div>
    );
};

export default MapComponent;