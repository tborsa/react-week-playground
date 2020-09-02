import React, {useState, useEffect} from 'react';

const UpdateTitle = () => {
  const [count, setCount] = useState(0);
  // document.title = 'our new title';// will run every time the state changes, wasted work

  useEffect(() => {
    console.log('i should run once');
    document.title = 'our new title';
  }, []);

  const add = () => {
    setCount(count + 1);
  }
  
  return (
    <div>
      <h2>UpdateTitle</h2>
      <p>count: {count}</p>
      <button onClick={add}>Add</button>
    </div>
  );
};

export default UpdateTitle;