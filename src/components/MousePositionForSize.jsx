import React from 'react';
import useMousePosition from '../hooks/useMousePosition';

const MousePositionForSize = () => {
  const {x, y} = useMousePosition();
  
  return (
    <div>
      <h1
        style={{
          fontSize: x,
          transform: `rotate(${y}deg)`
        }}
        >
          Whoooaaa!!!
        </h1>
    </div>
  );
};

export default MousePositionForSize;