import Axios from 'axios';
import React, {useState, useEffect} from 'react'

export default function CounterLogs() {
    // countone counttwo don't exist yet on first component
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);

    useEffect(() => {
        console.log('What is count one', countOne);
        // do action 1
    }, [countOne]);

    useEffect(() => {
        // do action two
        console.log('What is count two', countTwo);

    }, [countTwo])

    return (
        <div>
            <h2>{countOne}</h2>
            <button onClick={() => setCountOne(countOne +1)}>Add</button>
            <h2>{countTwo}</h2>
            <button onClick={() => setCountTwo(countTwo +1)}>Add</button>
        </div>
    )
}

