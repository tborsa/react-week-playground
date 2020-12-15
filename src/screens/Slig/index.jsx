import React from 'react';
import { Route } from 'react-router-dom'
import Dogs from '../../components/Dogs';

export default [
  <Route path="/dogs">
    <Slightly_Larger_Dogs />
  </Route>,
  <Route path="/dogs/:id">
    <Slightly_Larger_Dogs />
  </Route>
]