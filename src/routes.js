import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Student from './components/Student/Student';

import Home from './components/Home/Home';
import About from './components/About/About';
import ClassList from './components/ClassList/ClassList';



export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} path="/" />
      <Route path="/about" component={About} path="/about" />
      <Route path="/classlist/:class" component={ClassList} />
      <Route path="/student/:id" component={Student} />
   </Switch>
  );
}