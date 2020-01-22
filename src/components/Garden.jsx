import React from 'react';
import useGarden from '../hooks/useGarden';

const Garden = () => {
  const {  seeds, garden, plantSeed, waterGarden, refreshSeeds} = useGarden();

  const gardenBed = garden.map((plant, index) => {
    return (<div key={index} onClick={() => {waterGarden(index)}} style={{fontSize: `${plant.size}em`}}>{plant.plant}</div>);
  });

  const seedBag = Object.keys(seeds).map((seed, index) => {
    return (<div key={index} onClick={() => {plantSeed(seed)}}>{seed}</div>);
  });

  return (
    <div>
      <h1>The Garden</h1>
      <button onClick={refreshSeeds}>Get Seeds</button>
      <h2>seeds:</h2>
        <div className="seeds">
          {seedBag}
        </div>
      <h2>garden:</h2>
        <div className="garden">
          {gardenBed}
        </div>
    </div>
  );
};

export default Garden;