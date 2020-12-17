import React, {useState} from 'react';

import './App.css';
import './components/PointerPosition';
import HelloWorld from './components/HelloWorld';

function App() {
  const [toggle, setToggle] = useState(false);
  // logic
  return (
    <div style={{padding: '50px'}}>
      <h1>App</h1>
      {toggle && <HelloWorld message='very nice day today'/>}
      <button onClick={() =>setToggle(!toggle)}>Toggle</button>
    </div>
  );
}

export default App;
