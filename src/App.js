import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Vote} from 'react-router-dom';

import DogContext from './contexts/DogContext';

import './App.css';
import './components/PointerPosition';
import Screens from './screens';

function App() {
  const [dogList, setDogList] = useState(['floofer', 'spot']);
  return (
    <DogContext.Provider value={{dogList, setDogList}}>
      <Router>
        <div style={{padding: "100px"}}>
          <div style={{display: 'flex'}}>
            {/* All LINK IMPORTANT */}
            <Link to="/pokemon">pokemon</Link>
            &nbsp;
            <Link to="/about">about</Link>
            &nbsp;
            <Link to="/timer">timer</Link>
            &nbsp;
            <Link to="/vote">vote</Link>
            &nbsp;
            <Link to="/home">home</Link>
            &nbsp;
            <Link to="/dog">dogs</Link>
          </div>
          <Screens/>
        </div>
      </Router>
    </DogContext.Provider>
  );
}

export default App;
