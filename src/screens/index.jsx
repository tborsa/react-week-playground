import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DogScreens from './Dogs';
import CatScreens from './Cats';
import DolphinScreens from './Dolphins';
import DinosaurScreens from './Dinosaurs';
import Tigers from './Tigers';
import Hamsters from './Hamsters';
import Turtles from './Turtles';
import GhostScreen from './Ghost';
import lions from './Lions';
import Ants from './Ants';
import SharkScreens from './Sharks';

const index = () => {
  return (
    <Switch>
      {/* All routes IMPORTANT */}
      {[
        ...DogScreens,
        ...CatScreens,
        ...DolphinScreens,
        ...DinosaurScreens,
        ...Tigers,
        ...Hamsters,
        ...Turtles,
        ...GhostScreen,
        ...SharkScreens,
        ...lions,
        ...Ants
      ]}
      <Route path="/">
        <h1>404 not found</h1>
      </Route>
    </Switch>
  );
};

export default index;