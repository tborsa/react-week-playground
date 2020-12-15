import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Hamsters = () => {
  const params = useParams();
  const history = useHistory();
  console.log('these are the params', params);

  if (params.id == '10') {
    history.push('/cats');
  }

  return (
    <div>
      {/* use react router things */}
      <h1>THIS IS A HAMSTER</h1>
      <img href="https://s7d2.scene7.com/is/image/PetSmart/5141717?$pdp-placeholder-desktop$" alt="hamster" />
    </div>
  );
};

export default Hamsters;