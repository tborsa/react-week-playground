import React, {useState, useEffect} from 'react'

export default function Logger() {
    const [count, setCount] = useState(0); //when state changes we re run component
    const [countAgain, setCountAgain] = useState(0);
    const [name, setName] = useState('travis');

    // react waiting for state change? 
    // -> checks if state differs 
    // -> runs the component
    // -> outputs jsx
    // -> renders the jsx
    // -> checks useEffects 
    // -> run that useEffect (running after render makes it non blocking)

    console.log('component run');
    // console log the value of count and countAgain?
    useEffect(() => {
        console.log('count:', count);
    }, [count, name]); //1st render && i want to run when count changes
    // count or name change and then the function is run

    useEffect(() => {
        console.log('countAgain:', countAgain);
    }, [countAgain]);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Add</button>

            <h1>{countAgain}</h1>
            <button onClick={() => setCountAgain(countAgain + 1)}>Add</button>

            <h1>{name}</h1>
            <button onClick={() => setName('bob')}>Name changes</button>
            
        </div>
    )
}
