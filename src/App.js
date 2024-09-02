import React from 'react';
import MapComponent from './MapComponent';

const parcels = [
    // Your GeoJSON data for parcels
];

function App() {
    return (
        <div>
            <h1>Parcel Map</h1>
            <MapComponent parcels={parcels} />
        </div>
    );
}

export default App;
