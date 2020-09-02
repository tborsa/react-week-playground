import React, {useState, useEffect} from 'react';

const MousePosition = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // don't use a useEffect
  
  useEffect(() => {
    const onMouseMove = mp => {
      console.log('mouseposition', mp.clientX, mp.clientY);
      setX((currentState) => {
        return currentState + mp.clientX
      });
      setY((currentState) => {
        return currentState + mp.clientY;
      });
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      // to do cleanup runs when the component unmounts or when the effect is
      // triggered again
      console.log('clean up happened')
      document.removeEventListener('mousemove', onMouseMove);
    };
    //listens for cursor change
  }, []);

  return (
    <div>
      <h1 style={{
        color: `rgb(${x}, ${y}, 100)`,
        // transform: `rotate(${x}deg)`
      }}>
        X: {x}, Y: {y}
      </h1>
    </div>
  );
};

export default MousePosition;