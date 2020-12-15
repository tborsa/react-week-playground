import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Sharks = () => {
  const params = useParams();
  const history = useHistory();

  if (params.id === '10') {
    history.push('/Sharks');
  }
  return (
    <div>
      🦈🦈🦈🦈🦈SHARKS🦈🦈🦈🦈🦈
    </div>
  );
};

export default Sharks