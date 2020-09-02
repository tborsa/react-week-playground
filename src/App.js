import React, {useState} from 'react';
import StaleState from './components/StaleState';
import Logs from './components/Logs';
import './App.css';

function App() {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <>
      <button onClick={() => setShowComponent(!showComponent)}>Toggle Show</button>
      {showComponent && <StaleState/>}
    </>
  );
}

export default App;
