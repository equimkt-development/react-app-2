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

    const formatFeatureName = (feature) => {
        return feature.charAt(0).toUpperCase() + feature.slice(1).replace(/([A-Z])/g, ' $1').trim();
    };

    return (
        <div className="feature-toggle">
            <h3>Toggle Features</h3>
            {Object.keys(toggles).map((feature) => (
                <label key={feature}>
                    <input
                        type="checkbox"
                        checked={toggles[feature]}
                        onChange={() => handleToggle(feature)}
                    />
                    {formatFeatureName(feature)} {/* Format feature name */}
                </label>
            ))}
        </div>
    );
};

export default FeatureToggle;
