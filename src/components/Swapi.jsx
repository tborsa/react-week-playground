import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Swapi = () => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/1')
      .then((response) => {
        console.log('what is the response', response);
        setCharacter(response.data);
      });

  }, []);

  return (
    <div>
      <h2>Name: {character.name || 'spinner'}</h2>
      <p>height: {character.height || 'spinner'}</p>
    </div>
  );
};

export default Swapi;