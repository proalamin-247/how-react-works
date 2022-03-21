import React from 'react';

const DeviceDetails = (props) => {
    return (
        <div>
            <p>Device dettails: {props.DeviceDetails}, Price:{props.price}</p> 
        </div>
    );
};

export default DeviceDetails;