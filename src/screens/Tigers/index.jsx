import React from 'react';
import { Route } from 'react-router-dom'
import Tigers from '../../components/Tigers';

export default [
  <Route path="/tigers">
    <Tigers />
  </Route>,
  <Route path="/tigers/:id">
    <Tigers />
  </Route>
]