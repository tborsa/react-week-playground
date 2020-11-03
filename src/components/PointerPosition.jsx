import React, {useEffect, useState, useContext} from 'react';
import DogContext from '../contexts/DogContext';

const PointerPosition = () => {
  const [position, setPosition] = useState({x: 0, y: 0});
  const {dogList} = useContext(DogContext);
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
      {dogList.map((dog) => <h2>{dog}</h2>)}
      <p style={{color: `rgb(${position.x}, ${position.y}, 100)`}}>
        x: {position.x} y: {position.y}
      </p>
    </div>
  );
};

export default PointerPosition;