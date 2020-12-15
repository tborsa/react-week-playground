import React, {useContext} from 'react';
import DogContext from '../contexts/DogContext';
import {useParams, useHistory } from 'react-router-dom';

const Dogs = () => {
  const params = useParams();
  const history = useHistory();
  const {dogList, setDogList} = useContext(DogContext);
  console.log('these are the params', params);

  if (params.id == '10') {
    history.push('/cats');
  }

  return (
    <div>
      {/* use react router things */}
        {dogList.map((dogName, index) => <p key="index">{dogName}</p>)}
        <div onClick={() => setDogList(prev => [...prev, 'poodle'])}>
          🐩🦮
        </div>
    </div>
  );
};

export default Dogs;