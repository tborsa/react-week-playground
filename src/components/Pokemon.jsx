import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Pokemon = ({search}) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    // get pokemon info
    axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then(res => {
        console.log('res', res);
        setPokemon(res.data);
      });
  }, [search]); //control when the side effect

  return (
    <div>
      <h1>pokemon</h1>
      {!pokemon.name && <p>loading</p>} 
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites && pokemon.sprites.front_default}/>
    </div>
  );
};

export default Pokemon;