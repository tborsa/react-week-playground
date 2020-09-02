import React, {useState, useEffect} from 'react';

const StaleState = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {

    setInterval(() => {
      console.log('count :', count);
      setCount((prevCount) => prevCount + 1);
    }, 5000);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count +1)}>add</button>
    </div>
  );
};

export default StaleState;