import React from 'react';
import { Route } from 'react-router-dom'
import Dragons from '../../components/Dragons';

export default [
  <Route path="/dragons">
    <Dragons />
  </Route>,
  <Route path="/dragons/:id">
    <Dragons />
  </Route>
]