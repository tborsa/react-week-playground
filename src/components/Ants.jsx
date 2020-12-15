import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Ants = () => {
  const params = useParams();
  const history = useHistory();

  if (params.id === '10') {
    history.push('/Ants');
  }
  return (
    <div>

      🐜🐜🐜🐜Ants🐜🐜 🐜🐜
    </div>
  );
};

export default Ants