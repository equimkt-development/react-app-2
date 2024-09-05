import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const HeatmapLayer = ({ parcels }) => {
    const map = useMap();
    const heatLayerRef = useRef(null);

    useEffect(() => {
        if (heatLayerRef.current) {
            map.removeLayer(heatLayerRef.current);
        }

        return () => {};
    }, [parcels, map]);

    return null;
};

const MapComponent = ({ parcels, featureToggles }) => {
    const [zoomLevel, setZoomLevel] = React.useState(13);

    const handleZoomEnd = (e) => {
        setZoomLevel(e.target.getZoom());
    };

    return (
        <MapContainer center={[35.31836, -80.8322]} zoom={zoomLevel} onZoomEnd={handleZoomEnd} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {zoomLevel > 12 && parcels.map((parcel, index) => (
                <Marker key={index} position={[parcel.lat, parcel.lon]} icon={L.divIcon({ className: 'simple-dot', html: '<div style="width: 10px; height: 10px; background-color: red; border-radius: 50%;"></div>', iconSize: [10, 10] })}>
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
            ))}
        </MapContainer>
    );
};

export default MapComponent;