import React, { useEffect, useState } from 'react';
import Display from '../Dispaly/Display';

const Wtach = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = ()=>{
        const newStepsCount = steps +1;
        setSteps(newStepsCount);
    }

    useEffect(()=>{
        console.log(steps);
    }, [steps])

    return (
        <div style={{ border: '2px solid blue', margin: '15px' }}>
            <h2>This is my watch</h2>
            <h3>My Current Steps: {steps}</h3>
            <button onClick={increaseSteps}>De Dour......</button>
            <Display name='farmin' steps={steps}></Display>
        </div>
    );
};

export default Wtach;