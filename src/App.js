import React from 'react';
import HelloWorld from './components/HelloWorld';

import './App.css';
import './components/PointerPosition';
function App() {
  // logic
  return (
    <>
      <h1>App</h1>
      <div style={{padding: '50px'}}>
        <HelloWorld/>
      </div>
    </>
  );
}

export default App;
