import React, {useState, useReducer} from 'react';

const reducer = (state, action) => {
  
  switch (action.type) { 
  case 'subtract':
    return state - action.value;
  case 'reset':
    return 0;
  case 'add':
    return state + action.value;
  default:
    return state;    
  }

}

const Counter = () => {
  // const [count, setCount] = useState(0);
  const [count, dispatchCount] = useReducer(reducer,0);

  const add = (num) => {
    let action = {type: 'add', value: num}
    //logic
    dispatchCount(action)
  }

  const subtract = (num) => {
    dispatchCount({type: 'subtract', value: num})
  }

  const reset = () => {
    dispatchCount({type: 'reset'})
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => add(1)} >add</button>
      <button onClick={() => subtract(1)} >subtract</button>
      <button onClick={reset} >reset</button>
    </div>
  );
};

export default Counter;