import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import DogContext from './contexts/DogContext';
import Screens from './screens';

import './App.css';

function App() {
  const [dogList, setDogList] = useState(['roofus', 'spot']);

  return (
    <div style={{ padding: '50px' }}>
      <DogContext.Provider value={{dogList, setDogList}}>
        <Router>
          <h1>app</h1>
          {/* ADD lINKS HERE */}
          <Link to="/dogs">Dogs</Link>
          <Link to="/cats">Cats</Link>
          <Link to="/dinosaurs">Dinosaurs</Link>
          <Link to="/hamsters">Hamsters</Link>
          <Link to="/Ants">Ants</Link>
          <Link to="/turtles">Turtles</Link>
          <Link to="/lions">lions</Link>
          <Link to="/dragons">Dragons</Link>
          <Link to="/Tigers">lions</Link>
          <Link to="/dolphins">Dolphins</Link>
          <Link to="/SlightlyLargerDogs">SlightlyLargerDogs</Link>
          <Link to="/ghosts">Ghost</Link>
          <Screens />
        </Router>
      </DogContext.Provider>
    </div>
  );
}

export default App;
