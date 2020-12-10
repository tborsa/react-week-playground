import React, { useState, useEffect } from 'react';

const DocumentTitle = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = "the best react app";
    console.log('updating document title');
  }, []);//when deps array is empty == only run this effect once on first load

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  );
};

export default DocumentTitle;