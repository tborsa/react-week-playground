import React from 'react';
import { Route } from 'react-router-dom'
import GetData from '../../components/GetData';

export default [
  <Route exact path="/pokemon">
    <GetData />
  </Route>,
  <Route path="/pokemon/:pokemonNumber">
    <GetData />
  </Route>
]