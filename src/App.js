import React, {useState} from 'react';
import './App.css';
// import DocumentTitle from './components/DocumentTitle';
// import Logger from './components/Logger';
// import ShowMousePosition from './components/ShowMousePosition';
import CountDown from './components/CountDown';

function App() {
  // const [toggle, setToggle] = useState(true);

  return (
    <div style={{padding: '30px'}}>
      <h1>Hello World</h1>
      {/* <button onClick={() => setToggle(!toggle)}>toggle</button>
      {toggle && <ShowMousePosition/>} */}
      <CountDown start={30}/>
    </div>
  );
}
 
export default App;
