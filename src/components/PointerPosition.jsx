import React, {useEffect, useState} from 'react';

const PointerPosition = () => {
  const [position, setPosition] = useState({x: 0, y: 0});

  useEffect(() => {
    // update state
    const listener = mousePosition => {
      setPosition({x: mousePosition.clientX, y: mousePosition.clientY});
    }
    document.addEventListener('mousemove', listener);

    return () => { // if this effect is run again, or if the component is unmounted
      console.log('cleanup run');
      document.removeEventListener('mousemove', listener);
    }// a function that when run removes any lasting effects

  }, []);

  return (
    <div>
      <h2>Mouse Position</h2>
      <p style={{color: `rgb(${position.x}, ${position.y}, 100)`}}>
        x: {position.x} y: {position.y}
      </p>
    </div>
  );
};

export default PointerPosition;