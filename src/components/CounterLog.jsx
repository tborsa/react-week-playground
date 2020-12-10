import React, { useState, useEffect } from 'react';
import ShowMousePosition from './ShowMousePosition';

const CounterLog = () => {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  useEffect(() => {
  }, [count]); // if (prevCount !== currentCount) => run the effect
    
  useEffect(() => {
  }, [countTwo]); // if (prevCount !== currentCount) => run the effect
  
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <h2>{countTwo}</h2>
      <button onClick={() => setCountTwo(countTwo + 1)}>Add</button>
      {count % 2 === 0 &&<ShowMousePosition/>}
    </div>
  );
};

export default CounterLog;