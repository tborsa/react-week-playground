import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Dragons = () => {
  const params = useParams();
  const history = useHistory();
  history.push(`/dragons/${params}`);
  return (
    <div>
      🐉🐲
    </div>
  );
};

export default Dragons;