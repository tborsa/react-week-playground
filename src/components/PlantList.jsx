import React, { useState } from 'react';

const PlantList = () => {
  const [plants, setPlants] = useState(['🌴', '🌱','🌵']);

  console.log('rerender happend!');

  const removePlant = (index) => {
    // console.log('remove plant', index);
    const newPlants = [...plants]; // copy
    // newPlants.splice(index, 1);//dangerous mutates thing being spliced
    setPlants(newPlants);
    // setPlants(plants.filter((plant, curIndex) => curIndex !== index));
  }

  return (
    <div style={{display: 'flex'}}>
      {plants.map((plant, index) => <p onClick={() => {removePlant(index)}}>{plant}</p>)}
    </div>
  );
};

export default PlantList;