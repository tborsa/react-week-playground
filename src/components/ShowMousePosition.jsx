import React, {useEffect, useState} from 'react';

const ShowMousePosition = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    document.addEventListener('mousemove', mousePosition => {
      setX(mousePosition.clientX);
      setY(mousePosition.clientY);
    })
  }, []);

  return (
    <div>
      <h1>X: {x} Y: {y}</h1>
    </div>
  );
};

export default ShowMousePosition;