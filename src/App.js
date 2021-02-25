import React, {useState, useEffect} from 'react';

import './App.css';
import ClassPokedex from './components/ClassPokedex';

class App extends React.Component { // initialized once
  state = {
    show: true
  }
  toggle = () => {
    this.setState({show: !this.state.show});
  }
  render () { // called once per render
    return (
      <div style={{padding: '30px'}}>
        <h1>Hello World</h1>
        <button onClick={this.toggle}>toggle pokedex</button>
        {this.state.show && <ClassPokedex startPokemon="mew" test="5"/>}
      </div>
    );
  }
}
 
export default App;
