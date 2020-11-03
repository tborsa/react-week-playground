import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const GetData = () => {
  const [pokemon, setPokemon] = useState({});
  const params = useParams();
  console.log('what are the params', params);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokemonNumber || 1}`)
      .then(({ data }) => {
        setPokemon(data);
      });
  }, [params.pokemonNumber]);


  return (
    <div>
      <h1>Pokemon</h1>
      {pokemon.name}
    </div>
  );
};

export default GetData;