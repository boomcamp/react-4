import React, { Component } from 'react';
import {BrowserRouter as Router, Link, HashRouter} from 'react-router-dom';
import Routes from './routes'

export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav className="nav">
            <div>WestSide University</div>
            <div className="link-wrap">
              <Link exact to='/' className="links">Home</Link>
              <Link to='/about' className="links">About</Link>
            </div>
          </nav>
          <Routes/>
        </div>
      </HashRouter>
    );
  }
}
