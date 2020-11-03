import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../../components/homePage';

export default [
  <Route exact path="/home">
    <Home />
  </Route>
]