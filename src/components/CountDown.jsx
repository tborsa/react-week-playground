import React, {useState, useEffect} from 'react'

export default function CountDown({start}) {
    const [count, setCount] = useState(start); //10
    const [reset, setReset] = useState(0);
    // count is a snapshot of state
    // count = 10
    useEffect(() => {
        console.log('restarting counter');
        setCount(start); //only happens when dep array changes
        const countDown = setInterval(() => {
            //setCount(count - 1); //lead to stale state (looking at old snapshots of state)
            // functional set state
            setCount((current) => {
                return current -1; //returning the new versions of state
            });
        }, 1000);
        // cleanup
        // remove the effects of the previous effect before calling the effect again
        return () => {
            // this function will be run between calls of useEffect
            // or on an unmount
            console.log("cleanup function called");
            clearInterval(countDown);
        }
    }, [reset, start]); //once on the first function run

    return (
        <div>
            <h2>CountDown</h2>
            <p>{count}</p>
            <button onClick={() => setReset(reset +1)}>reset</button>
        </div>
    )
}
