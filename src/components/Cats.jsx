import React, {useContext} from 'react';
import DogContext from '../contexts/DogContext';

const Cats= () => {
  const {dogList, setDogList} = useContext(DogContext);

  return (
    <div>
      {/* use react router things */}
        🐈
        {dogList.map((dogName, index) => <p key="index">{dogName}</p>)}
        <div onClick={() => setDogList(prev => [...prev, 'fluf'])}>
          🐩
        </div>
    </div>
  );
};

export default Cats