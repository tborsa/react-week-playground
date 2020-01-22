import React, {useEffect, useState} from 'react';

const useMousePosition = (offset) => {
  const [coords, setCoords] = useState([0,0]);

  useEffect(() => {
    const handleMouse = (mp) => {
      setCoords([coords[0], mp.clientY + offset]);
      setCoords((oldCoords) =>[oldCoords[0], mp.clientY + offset]);
    };
    document.addEventListener('mousemove',handleMouse);

    return () => {document.removeEventListener('mousemove', handleMouse)};
  }, []);

  return coords;
}

export default useMousePosition;


