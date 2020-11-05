import { render } from '@testing-library/react';
import React, {useEffect, useState} from 'react';

class ClassTimer extends React.Component {
  constructor() {
    super();
    this.state = {
      timer: 0
    }
  }
  
  componentDidMount() {
    console.log('am i run');
    this.interval = setInterval(() => {
      // console.log("is this running");
      console.log("inside timer");
      this.setState({
        timer: this.state.timer + 1
      }); // current is the up to date version of state
    }, 1000);
  }

  componentWillUnmount() {
    console.log("cleanup being run in unmount");
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h2>Timer: {this.state.timer}</h2>
      </div>
    );
  }
};

export default ClassTimer;