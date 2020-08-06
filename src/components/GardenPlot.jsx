import React from 'react';
import useGarden from '../hooks/useGarden';

const GardenPlot = () => {
  const {seeds, garden, waterSeed, getSeeds, plantSeed} = useGarden();

  const seedOptions = Object.keys(seeds).map((seed) =>{
    return (<h2 onClick={() => plantSeed(seed)}>{seed}</h2>)
  });

  const showGarden = garden.map((plant, index) => {
    return (<h1 onClick={() => waterSeed(index)} style={{fontSize: `${plant.size}em`}}>{plant.emoji}</h1>);
  })

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}>
      <button onClick={getSeeds}>Get me my seeds!</button>
      <br></br>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        {seedOptions}
      </div>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        {showGarden}
      </div>
    </div>
  );
};

export default GardenPlot;