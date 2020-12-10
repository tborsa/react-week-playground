import React , {useState} from 'react';

import './App.css';
// import CounterLog from './components/CounterLog';
// import ShowMousePosition from './components/ShowMousePosition';
// import Interval from './components/Interval';
import Pokemon from './components/Pokemon';

function App() {
  const [search, setSearch] = useState(1);

  const updateSearch = (event) => {
    setSearch(event.target.value);
  }
  return (
    <div style={{margin: '100px'}}>
      <h1>The App</h1>
      <input onChange={updateSearch} value={search}/>
      <Pokemon search={search}/>
      {/* <Interval/> */}
    </div>
  );
}

export default App;
