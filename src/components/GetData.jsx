import React, {useState, useEffect} from 'react';
import axios from 'axios';

const GetData = ({num}) => {
  const [pokemon, setPokemon] = useState({});
  console.log("Pokemon component rendering")

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
    .then(({data}) => {
      setPokemon(data);
    });
  }, [num]);


  return (
    <div>
      <h1>Pokemon</h1>
      {pokemon.name}
      
    </div>
  );
};

export default GetData;