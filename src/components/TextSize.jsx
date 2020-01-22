import React from 'react';
import useMousePosition from '../hooks/useMousePosition';

const TextSize = () => {
  const [x, y] = useMousePosition();

  const textStyle = {
    fontSize: `${x}px`,
    transform: `rotate(${y}deg)`
  }

  return (
    <div>
      <h2 style={textStyle}>WHOAHH!</h2>
    </div>
  );
};

export default TextSize;