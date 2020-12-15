import React from 'react';
import { Route } from 'react-router-dom'
import Ants from '../../components/Ants';

export default [
  <Route path="/ants">
    <Ants />
  </Route>,
  <Route path="/ants/:id">
    <Ants />
  </Route>
]