import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PokemonScreens from './Pokemon';
import AboutScreens from './About';
import DogScreens from './Dogs';
import HomeScreens from './Home/Home.jsx';
import VoteScreens from './Vote';

const index = () => {
  return (
    <Switch>
      {/* All routes IMPORTANT */}
      {[
        ...AboutScreens,
        ...DogScreens,
        ...HomeScreens,
        ...VoteScreens,
        ...PokemonScreens,
      ]}
      <Route path="/">
        <h1>404 not found</h1>
      </Route>
    </Switch>
  );
};

export default index;