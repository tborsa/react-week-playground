import React from 'react';
import { Route } from 'react-router-dom'
import Dolphins from '../../components/Dolphins';

export default [
  <Route path="/dolphins">
    <Dolphins />
  </Route>,
  <Route path="/dolphins/:id">
    <Dolphins />
  </Route>
]