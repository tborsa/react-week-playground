import React, {useState} from 'react';
import { useEffect } from 'react';

const MousePosition = () => {
  const [coords, setCoords] = useState([0,0]);

  useEffect(() => {
    let obj = {};
    const handleMouse = (mp) => {
      setCoords([mp.clientX, mp.clientY]);
    };
    document.addEventListener('mousemove',handleMouse);

    return () => {document.removeEventListener('mousemove', handleMouse)};
  }, []);

  return (
    <div>
      <h2>Mouse Coords:</h2>
      <p>X({coords[0]}) y({coords[1]})</p>
    </div>
  );
};

export default MousePosition;