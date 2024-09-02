import React from 'react';

const Tooltip = ({ data }) => {
    if (!data) return null;

    return (
        <div className="tooltip">
            <h3>{data.PARUSEDESC}</h3>
            <p>Land Value: {data.LANDVAL}</p>
        </div>
    );
};

export default Tooltip;
