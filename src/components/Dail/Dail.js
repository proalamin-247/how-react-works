import React from 'react';

const Dail = (props) => {
    return (
        <div style={{ border: '2px solid green', margin: '5px' }}>
            <h2>Dail: {props.name}</h2>
            <p>SO far steps today: {props.steps}</p> 
        </div>
    );
};

export default Dail;