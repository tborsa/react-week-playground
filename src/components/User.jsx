import React, {useState} from 'react';
import Plant from './Plant';

const User = () => {
  const [user, setUser] = useState({
    name: 'travis',
    email: 'travis@travis.com',
    phone: 123123123,
    friendsList: ['tom', 'bob', 'sal']
  })

  const addFrank = () => {
    setUser({
      ...user,
      friendsList: [...user.friendsList, 'Frank']
    })
  }

  return (
    <div>
      <Plant plant="🌴" dog="sam" size={3} />
      {user.name}
      <h2>Friends</h2>
      <button onClick={addFrank}>Add Frank</button>
      {user.friendsList.map((friend) => <p>{friend}</p>)}
    </div>
  );
};

export default User;