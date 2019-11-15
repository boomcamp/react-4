import React, { Component } from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import {Route, Switch} from 'react-router-dom';
import ClassList from './components/ClassList/ClassList';
import Student from './components/Student/Student';
export default class route extends Component {
  render() {
    return (
      <Switch>
        <Route exact component={Home} path='/' />
        <Route component={About} path='/about' />
        <Route component={ClassList} path='/classlist/:class' />
        <Route component={Student} path='/students/:id'/>
      </Switch>
    );
  }
}