import React, {useState} from 'react';

const seedLookup = {
  "⌾": "🌱",
  ".": "🌿",
  o: "🌷",
  "0": "🍀",
  "@": "🌵",
  "*": "🌴"
};

const Garden = () => {

  const [seeds, setSeeds] = useState(seedLookup);
  const [garden, setGarden] = useState([]); //[{plant: , size: }]


  const water = (index) => {
    // 

    //water a specific plant
    const newGarden = garden.map((plot, currentIndex) => {//[{plant: , size: }]
      if (currentIndex === index) { //{plant: 🌳, size: 1}
        return {...plot, size: plot.size + 1};
      } else {
        return plot;
      }
    });

    setGarden(newGarden);

  };

  const plant = (seed) => {

    // remove the seed from seeds
    const newSeeds = {...seeds};
    delete newSeeds[seed];
    // const {[seed]: remove, ...newSeeds} = seeds;
    setSeeds(newSeeds);
    //add the new plant to garden
    setGarden([...garden, {plant: seeds[seed], size: 1}]);
  }

  return (
    <div>
      <h2>Seeds</h2>
      <div style={{display: 'flex'}}>
        {Object.keys(seeds).map((key) => <p onClick={() => plant(key)}>{key}</p>)}
      </div>
      <h2>Garden</h2>
      <div style={{display: 'flex'}}>
        {garden.map((plot, index) => <p style={{fontSize: `${plot.size}em`}} onClick={() => water(index)}>{plot.plant}</p>)}
      </div>
    </div>
  );
};

export default Garden;