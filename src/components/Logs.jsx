import React, {useState, useEffect} from 'react';

const Logs = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Susan');
  
  useEffect(() => {
    console.log('count:', count);
  }, [count]);
  
  useEffect(() => {
    console.log('name:', name);
  }, [name]);

  const add = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={add}>Add</button>
      <h2>{name}</h2>
      <button onClick={() => setName('Jim')}>Jimify</button>
    </div>
  );
};

export default Logs;