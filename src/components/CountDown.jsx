import React, {useState, useEffect} from 'react'

// timer = 30
export default function CountDown({start}) {
    const [timer, setTimer] = useState(30);
    // CountDown2 = 29
    useEffect(() => {
        console.log('run once');
        // setTimer(start);
        const interval = setInterval(() => {
            console.log('count down', timer);
            //timer = 30 snapshot
            // want the current version of timer
            // setTimer(timer -1); X
            setTimer((currentState) => {
                //current state is the most up to date version of timer
                console.log('current timer', currentState);
                return currentState - 1;
            }); //29
        }, 1000);

        return () => {
            // cleanup the interval
        }
    }, []); //only run this once

    return (
        <div>
            <h2>Time: {timer}</h2>
        </div>
    )
}
