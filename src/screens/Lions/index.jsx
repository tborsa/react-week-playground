import React from 'react';
import { Route } from 'react-router-dom'
import lions from '../../components/lions';

export default [
  <Route path="/lions">
    <lions />
  </Route>,
  <Route path="/lions/:id">
    <lions />
  </Route>
]