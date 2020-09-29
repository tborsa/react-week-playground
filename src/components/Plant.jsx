import React, { useState } from 'react';

// recieves props plant (plant emoji), and Size (number)
const Plant = ({size, plant}) => {
  let [plantSize, setPlantSize] = useState(size);

  console.log('theses are all the props');

  const growPlant = () => {
    console.log('plantSize before', plantSize);
    setPlantSize(plantSize + 1);
    console.log('plantSize after', plantSize);
  }

  return (
    <div>
      <p onClick={growPlant} style={{fontSize: `${plantSize}em`}}>{plant}</p>
    </div>
  );
};

export default Plant;