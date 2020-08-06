import React, {useState, useEffect} from 'react';

const useMousePosition = (offset) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  
  useEffect(() => {
    document.addEventListener('mousemove', mousePosition => {
      setX(mousePosition.clientX);
      setY(mousePosition.clientY);
    })
  }, []);

  return {
    x,
    y
  }

};

export default useMousePosition;