import React, {useEffect, useState} from 'react';

const Timer = () => {
  const [timer, setTimer] = useState(0);
  // console.log('does timer change', timer);
  useEffect(() => {
    setInterval(() => {
      // console.log("is this running");
      setTimer(current => current + 1); // current is the up to date version of state
      // setTimer(timer + 1); // timer is a snapshot in time of state
    }, 1000);
    return () => {
      // cleanup interval
    }
  }, []);

  return (
    <div>
      <h2>Timer: {timer}</h2>
    </div>
  );
};

export default Timer;