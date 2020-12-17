import React from 'react';

// React.Component
// State + Props

class HelloWorld extends React.Component{

  constructor() { // run once when the component is initialized
    super(); //run the parent/extended class version of this method
    this.state = { //single state
      timeOfDay: 'morning',
      timer: 0
    }
    // this.night = this.night.bind(this);
  }

  // useEffect(() => {
  // return () => 
  // }, [])

  // Lifecycle methods
  componentDidMount() {
    // Runs once whent the component is first mounted (first shown to the user)
    console.log('component did mount');
    this.tick = () => {
      this.setState({
        ...this.state,
        timer: this.state.timer +1
      })
    }
    setInterval(this.tick, 1000);
  }
  
  // useEffect(() => {
  // return () => 
  // }, [timeOfDay])
  componentDidUpdate(prevProps, prevState) {
    // runs everytime (after) a render for this component happens
    if (prevState.timeOfDay !== this.state.timeOfDay) {
      console.log(' the time of day has changed');
      // data fetch
    }
    // console.log('component did update');
  }

  
  componentWillUnmount() {
    // component wide cleanup
    // runs once immediately before the component is unmounted
    clearInterval(this.tick);
    console.log('component will unmount');
  }

  // whatever this is here
  night = () => { //any function you pass to an event or call outside the component: bind this
    // it will be the same here
    this.setState({
      timeOfDay: 'night'
    })
    console.log('night run');
  }
  
  render() {
    // console.log('props', this.props);
    let {message, otherProps} = this.props;
    return (
      <>
        <h2>Hello World</h2>
        <p>Good {this.state.timeOfDay} </p>
        <button onClick={this.night}>🌘</button>
        <p>{message}</p>
        <p>{this.state.timer}</p>
      </>
    )
  }
}

export default HelloWorld;