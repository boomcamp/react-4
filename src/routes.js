import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';

export default function Routes() {
  return (
    <Switch>
      <Route exact component={Home} path="/" />
      <Route component={About} path="/about" />
    </Switch>
  );
}