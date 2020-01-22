import React from 'react';
import logo from './logo.svg';
import MousePosition from './components/MousePosition';
import TextSize from './components/TextSize';
import TextColor from './components/TextColor';
import Garden from  './components/Garden';
import './App.css';

function App() {
  return (
    <>
      <MousePosition></MousePosition>
      <Garden></Garden>
    </>
  );
}

export default App;
