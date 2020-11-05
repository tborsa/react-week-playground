import React from 'react';
import ClassTimer from './ClassTimer';

class CustomGreeting extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 25,
      message: 'Custom Message'
    }
    this.changeGreeting = this.changeGreeting.bind(this) //this = instance of customGreeting
  }

  // componentDidMount() { // useEffect(() => {}, []);
  //   console.log('component mounted');
  // }

  // componentDidUpdate(prevProps, prevState) { //useEffect(() => {}, [state.message])
  //   console.log('component updated');
  //   if (prevState.message !== this.state.message) {
  //     // do something
  //   }
  // }

  // componentWillUnmount() {
  //   console.log("component unmounted");
  // }

  changeGreeting () {
    this.setState({
      count: 45,
      message: 'updated greeting'
    })
  }

  render() {
    // expected to return some jsx
    return (
      // jsx
      <>
        <h2> {this.state.message} </h2>
        <button onClick={this.changeGreeting} >Goodbye</button>
        <h3>Good {this.props.timeOfDay}</h3>
        <div style={{padding: '50px'}}>
          {this.state.count === 25 && <ClassTimer />}
        </div>
      </>
    );
  }

}

export default CustomGreeting;
