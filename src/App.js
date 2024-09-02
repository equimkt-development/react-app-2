import React, { useEffect, useState } from 'react';
import MapComponent from './MapComponent';

function App() {
    const [parcels, setParcels] = useState([]);

    useEffect(() => {
        fetch('/data/test-data-2.csv') // Path to your CSV file
            .then(response => response.text())
            .then(data => {
                const parsedData = parseCSV(data); // Ensure this line is present
                console.log(parsedData); // Log the parsed data
                setParcels(parsedData);
            })
            .catch(error => console.error('Error fetching the CSV file:', error));
    }, []);

    const parseCSV = (data) => {
        const rows = data.split('\n').slice(1); // Skip header row
        return rows.map(row => {
            const columns = row.split(',');
            return {
                lat: parseFloat(columns[0]),
                lon: parseFloat(columns[1]),
                PARUSEDESC: columns[2],
                LANDVAL: parseFloat(columns[3]),
                // Add other fields as needed
            };
        }).filter(parcel => !isNaN(parcel.lat) && !isNaN(parcel.lon)); // Filter out invalid entries
    };

    return (
        <div>
            <h1>Parcel Map</h1>
            <MapComponent parcels={parcels} />
        </div>
    );
}

export default App;
