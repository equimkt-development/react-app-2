import React from 'react';
import FeatureToggle from '../FeatureToggle/FeatureToggle';

const Dashboard = ({ onToggle }) => {
    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <FeatureToggle onToggle={onToggle} />
            {/* Additional dashboard elements can be added here */}
        </div>
    );
};

export default Dashboard;
