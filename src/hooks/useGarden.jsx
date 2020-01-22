import React, {useState, useEffect} from 'react';

const seedLookup = {
  "⌾": "🌱",
  ".": "🌿",
  "o": "🌷",
  "0": "🍀",
  "@": "🌵",
  "*": "🌴"
};

const useGarden = () => {
  const [garden, setGarden] = useState([]);
  const [seeds, setSeeds] = useState({});

  const refreshSeeds = () => {
    setSeeds(seedLookup);
  }

  const plantSeed = (seed) => {
    //remove seed from seeds
    // const newSeeds = {...seeds};
    // delete newSeeds[seed];
    // setSeeds(newSeeds);

    const {[seed]: value, ...newSeeds} = seeds;
    setSeeds(newSeeds);
    //add plant to garden
    setGarden((z) => [...garden, {plant: seeds[seed] , size: 1}]);
  }

  const waterGarden = (plot) => {
      const newGarden = [...garden];
      newGarden[plot].size ++;
      setGarden(newGarden);
  }


  return {
    seeds,
    garden,
    plantSeed,
    waterGarden,
    refreshSeeds
  }
};

export default useGarden;