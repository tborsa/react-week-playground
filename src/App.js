import React, {useEffect, useState} from 'react';

import './App.css';
import './components/PointerPosition';
import PointerPosition from './components/PointerPosition';
import Timer from './components/Timer';
import GetData from './components/GetData';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("bob");
  
  
  useEffect(() => {
    console.log('count has changed', count);
    // got a name
  }, [count, name]);  // prevname == newName

  useEffect(() => {
    console.log('name has changed', name);
  }, [name]);
  
  useEffect(() => {
    // do side effects here
    console.log('running side efffect');
    document.title = 'TEST TITLE CHANGE';// work is done only when needed
  }, []); //list of dependencies if empty the effect runs once when the component is first rendered

  
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <h1>{name}</h1>
      <button onClick={() => setName("sam")}>change name</button>
      {count % 2 == 0 && <PointerPosition/>}
      {<Timer/>}
      {<GetData num={count} />}
    </>
  );
}

export default App;
