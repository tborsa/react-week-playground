import React from 'react';
import CustomGreeting from './CustomGreeting';

class HelloWorld extends React.Component {
  
  constructor() {
    super();
  }

  render() {
    // expected to return some jsx
    return (
      // jsx
      <>
        <h2> Hello world Component</h2>
        <div style={{padding: '50px'}}>
          <CustomGreeting timeOfDay="morning"/>
        </div>
      </>
    );
  }

}

export default HelloWorld;