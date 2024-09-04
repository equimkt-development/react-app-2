import React, { useEffect, useState } from 'react';
import MapComponent from './components/MapComponent/MapComponent';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
    const [parcels, setParcels] = useState([]);
    const [featureToggles, setFeatureToggles] = useState({
        landValue: false,
        gisAcres: false,
        valuePerAcre: false,
        proximityScore: false,
        trafficScore: false,
        landValueScore: false,
        combinedScore: false,
    });

    useEffect(() => {
        // fetch('/data/test-data-2.csv')
        fetch('/data/test-data-large.csv')
            .then(response => response.text())
            .then(data => {
                const parsedData = parseCSV(data);
                console.log(parsedData);
                setParcels(parsedData);
            })
            .catch(error => console.error('Error fetching the CSV file:', error));
    }, []);

    const parseCSV = (data) => {
        const rows = data.split('\n').slice(1);
        return rows.map(row => {
            const columns = row.split(',');
            return {
                lat: parseFloat(columns[0]),
                lon: parseFloat(columns[1]),
                PARUSEDESC: columns[2],
                LANDVAL: parseFloat(columns[3]),
                GISACRES: parseFloat(columns[4]),
                VALUE_PER_ACRE: parseFloat(columns[5]),
                PROXIMITY_SCORE: parseFloat(columns[6]),
                TRAFFIC_SCORE: parseFloat(columns[7]),
                LAND_VALUE_SCORE: parseFloat(columns[8]),
                COMBINED_SCORE: parseFloat(columns[9]),
            };
        }).filter(parcel => !isNaN(parcel.lat) && !isNaN(parcel.lon));
    };

    const handleToggleChange = (toggles) => {
        setFeatureToggles(toggles);
    };

    return (
        <div>
            <h1>Parcel Map</h1>
            <Dashboard onToggle={handleToggleChange} />
            <MapComponent parcels={parcels} featureToggles={featureToggles} />
        </div>
    );
}

export default App;
