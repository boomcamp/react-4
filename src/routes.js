import React from 'react'; 
import { Switch, Route } from 'react-router-dom';

import ClassList from './components/ClassList/ClassList';
import Home from './components/Home/Home';
import About from './components/About/About';
import Student from './components/Student/Student';
import Contact from './components/Contact/Contact';

export default function Routes(){
    return(
        <Switch>
            <Route exact path="/" component = {Home}  />
            <Route path="/about" component = {About} />
            <Route path="/contact/:contact" component = {Contact} />
            <Route path="/student/:id" component = {Student} />
            <Route path="/classlist/:class" component = {ClassList}  />
        </Switch>
    );
}