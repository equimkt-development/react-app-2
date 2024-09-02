import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

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
                {parcels.map((parcel, index) => (
                    <Marker key={index} position={[parcel.lat, parcel.lon]}>
                        <Popup>
                            <div>
                                <h3>{parcel.PARUSEDESC}</h3>
                                <p>Land Value: {parcel.LANDVAL}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapComponent;