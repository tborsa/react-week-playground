import React, {useState} from 'react';
import logo from './logo.svg';

import './App.css';


const seedLookup = {
  "⌾": "🌱",
  ".": "🌿",
  "o": "🌷",
  "0": "🍀",
  "@": "🌵",
  "*": "🌴"
};

function App() {
  console.log('component function was run');
  const [garden, setGarden] = useState([{plant: "🌿", size: 1}]);
  const [seeds, setSeeds] = useState(["⌾", ".", "o", "0", "@", "*"]);

  const plantSeed = (seed) => {
    // add the new plant  to the plants array
    // add new object to garden state
    const newGarden = [...garden, {plant: seedLookup[seed], size: 1}];
    setGarden(newGarden);
    // setGarden([...garden, {plant: seedLookup[seed], size: 1}]);
    // remove seed from seeds state
    const newSeeds = seeds.filter(currentSeed => currentSeed !== seed);
    setSeeds(newSeeds);
    // setSeeds(seeds.filter(currentSeed => currentSeed !== seed));
    console.log(`garden: ${garden}, newgarden: ${newGarden } seeds: ${seeds}, newSeeds: ${newSeeds}`);
  }

  const waterPlant = (plot) => {
    // increase that plants size
    //  garden => [{plant: "🌿", size: 1}]
    const newGarden = garden.map(currentPlot => {
      if (currentPlot.plant === plot.plant) {
        return {plant: plot.plant, size: currentPlot.size + 1};
      } else {
        return currentPlot;
      }
    })
    console.log('current  state', garden);
    console.log('new state', newGarden);
    setGarden(newGarden);
  }

  let plantList = garden.map((plot) => {
    console.log('plot size', plot.size);
    return (<h3 onClick={() => waterPlant(plot)} style={{fontSize: `${plot.size}em`}}>{plot.plant}</h3>);
  })

  let seedsList = seeds.map((seed) => {
    return (<button onClick={() => plantSeed(seed)}>{seed}</button>);
  })

  return (
    <>
      <h1>Plants</h1>
      {plantList}
      {seedsList}
    </>
  );
}

export default App;
