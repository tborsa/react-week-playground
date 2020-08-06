import React, { useState, useEffect } from 'react';

//  pure 
const seedLookup = {
  "⌾": "🌱",
  ".": "🌿",
  "o": "🌷",
  "0": "🍀",
  "@": "🌵",
  "*": "🌴"
};

const useGarden = () => {
  const [seeds, setSeeds] = useState({}); // {"@": "🌵", "o": "🌷"}
  const [garden, setGarden] = useState([]); // [{plant: 🌵, size: 1}, {plant: 🌵, size: 1}]
  

  const getSeeds = () => {
    let seeds = {};
    for (let i = 0 ; i < 5; i++) {
      let random = Math.floor(Math.random() * 5);
      let seedOptions = Object.entries(seedLookup);
      seeds[seedOptions[random][0]] = seedOptions[random][1];
    }
    setSeeds(seeds);
  }

  const plantSeed = (seed) => {
    // remove the seed from seeds
    // delete seeds[seed] mutates the original state
    // option 1
    let newSeeds = {...seeds};
    delete newSeeds[seed];
    // option 2
    let {[seed]: value, ...updatedSeeds} = seeds;
    setSeeds(updatedSeeds);
    // add plant to the garden
    let emoji = seedLookup[seed];
    setGarden(prev => [...prev, {emoji, size: 1}]);
  }

  const waterSeed = (plotPosition) => {
    // let gardenCopy = [...garden];
    // let gardenCopy = garden.slice(0);
    garden[plotPosition].size += 1;
    console.log(garden);
    // gardenCopy[plotPosition] = {...gardenCopy[plotPosition], size: gardenCopy[plotPosition].size + 1};
    setGarden(garden);
  }

  return {
    seeds,
    garden,
    getSeeds,
    plantSeed,
    waterSeed
  }
}

export default useGarden;




// 0.0.2.2.202.2
// 🌲

// get a set of seeds <
// click on a seed & plant that seed <
// click on a plant and grow the plant <