import React from 'react';
import { Route } from 'react-router-dom'

import Vote from '../../components/Vote';

export default [
  <Route exact path="/vote">
    <Vote />
  </Route>
 ]