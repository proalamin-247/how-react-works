import React from 'react';
import DeviceDetails from '../DeviceDetails/DeviceDetails';

const Device = (props) => {
    return (
        <div>
            <h1>I have :{props.name}</h1>
            <DeviceDetails DeviceDetails='ram:16gb, camera:3333mpx' price='12500'></DeviceDetails>
        </div>
    );
};

export default Device;