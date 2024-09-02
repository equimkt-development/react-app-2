import React, { useState } from 'react';

const FeatureToggle = ({ onToggle }) => {
    const [toggles, setToggles] = useState({
        landValue: false,
        gisAcres: false,
        valuePerAcre: false,
        proximityScore: false,
        trafficScore: false,
        landValueScore: false,
        combinedScore: false,
    });

    const handleToggle = (feature) => {
        const updatedToggles = { ...toggles, [feature]: !toggles[feature] };
        setToggles(updatedToggles);
        onToggle(updatedToggles); // Pass the updated toggles to the parent
    };

    return (
        <div className="feature-toggle">
            <h3>Toggle Features</h3>
            <label>
                <input
                    type="checkbox"
                    checked={toggles.landValue}
                    onChange={() => handleToggle('landValue')}
                />
                Land Value
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={toggles.gisAcres}
                    onChange={() => handleToggle('gisAcres')}
                />
                GIS Acres
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={toggles.valuePerAcre}
                    onChange={() => handleToggle('valuePerAcre')}
                />
                Value Per Acre
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={toggles.proximityScore}
                    onChange={() => handleToggle('proximityScore')}
                />
                Proximity Score
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={toggles.trafficScore}
                    onChange={() => handleToggle('trafficScore')}
                />
                Traffic Score
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={toggles.landValueScore}
                    onChange={() => handleToggle('landValueScore')}
                />
                Land Value Score
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={toggles.combinedScore}
                    onChange={() => handleToggle('combinedScore')}
                />
                Combined Score
            </label>
        </div>
    );
};

export default FeatureToggle;
