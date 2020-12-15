import React from 'react';
import { Route } from 'react-router-dom'
import Dogs from '../../components/Dogs';

export default [
  <Route path="/dogs">
    <Dogs />
  </Route>,
  <Route path="/dogs/:id">
    <Dogs />
  </Route>
]