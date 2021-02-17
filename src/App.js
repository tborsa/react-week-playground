import React, {useState, useEffect} from 'react';

import './App.css';
import CounterLogs from './components/CounterLogs';
import ShowMousePosition from './components/ShowMousePosition';
import CountDown from './components/CountDown';
import Pokedex from './components/Pokedex';

function App() {
  const [showComponent, setShowComponent] = useState(true);
  const [start, setStart] = useState(10);
  useEffect(() => {
    // behaviour to run, define the side effect
    document.title = "hello wold app"; //<= the side effect
  }, []); //empty dependency array means run once on first render

  return (
    <div style={{padding: '30px'}}>
      <h1>Hello World</h1>
      <Pokedex/>
    </div>
  );
}
 
export default App;
