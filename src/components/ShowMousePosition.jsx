import React, {useState, useEffect} from 'react';

const ShowMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

  useEffect(() => {
    // console.log('new event listener added');
    const handleMouseMove = (mP) => { //add another event listener
      console.log('updating  mouse position');
      setMousePosition({x: mP.clientX, y: mP.clientY}); //update the state => rerender
    }
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      console.log("cleanup happening");
      document.removeEventListener('mousemove', handleMouseMove);
    }

  }, []); //control when a side effect runs & the conditions in which it runs

  return (
    <div>
      <p> X: {mousePosition.x}   Y: {mousePosition.y}</p>
    </div>
  );
};

export default ShowMousePosition;