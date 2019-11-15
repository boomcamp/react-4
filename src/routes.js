import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';
import Classlist from './components/ClassList/ClassList';
import Student from './components/Student/Student';


export default function Routes (){
    return(
        <Switch>
            <Route path="/" exact component ={Home}/>
            <Route path="/About" component ={About}/>
            <Route component={Classlist} path="/classlist/:class"/>
            <Route component ={Student} path="/student/:id"/>
        
        </Switch>
    )
}       