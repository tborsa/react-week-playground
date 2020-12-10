import React, {useState, useEffect} from 'react';

const Interval = () => { //oldstate !== newstate => run the component
  const [clock, setClock] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setClock(prev => {
        return prev + 1;
      });
    }, 1000);
  }, []); //control when a side effect runs & the conditions in which it runs

  return (
    <div>
      <p> Clock: {clock} </p>
    </div>
  );
};

export default Interval;