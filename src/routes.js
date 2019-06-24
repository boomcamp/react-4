import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Student from './components/Student/Student';
import Home from './components/Home/Home';
import About from './components/About/About';
import ClassList from './components/ClassList/ClassList';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/classlist/:class" component={ClassList} />
            <Route path="/student/:id" component={Student} />
        </Switch>
    )
}

