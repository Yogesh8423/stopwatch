import React from 'react';

const LapList = ({ laps }) => {
    return (
        <ul>
            {laps.map((lap, index) => (
                <li key={index}>{lap}</li>
            ))}
        </ul>
    );
}

export default LapList;
