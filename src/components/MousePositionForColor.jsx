import React from 'react';
import useMousePosition from '../hooks/useMousePosition';

const MousePositionForColor = () => {
  const {x, y} = useMousePosition();
  
  return (
    <div>
      <h1
        style={{
          color: `rgb(${x}, ${y}, 100)`
        }}
        >
         RAINBOW!!!
        </h1>
    </div>
  );
};

export default MousePositionForColor;