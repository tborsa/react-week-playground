import React, {useContext} from 'react';
import DogContext from '../contexts/DogContext';

const Dogs = () => {
  const {dogList, setDogList} = useContext(DogContext);
  return (
    <div>
      {dogList.map((dog) => <h2>{dog}</h2>)}
      asdfasdfasdf
      <p onClick={() => setDogList([...dogList,'little dog'])}>🦮</p>
    </div>
  );
};

export default Dogs;