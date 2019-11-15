import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from './components/About/About';
import Home from './components/Home/Home';
import ClassList from './components/ClassList/ClassList';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/ClassList/:class" component={ClassList} />
        </Switch>
    )
}