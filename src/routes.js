import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from './components/About/About';
import Home from './components/Home/Home';
import ClassList from './components/ClassList/ClassList';
import Student from './components/Student/Student';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/classList/:class" component={ClassList} />
            <Route path="/student/:id" component={Student} />
        </Switch>
    )
}