import React, { Component } from "react";
import { HashRouter, Link } from "react-router-dom";

import Routes from "./routes";
export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav className="nav">
            <div className="name">WestSide University</div>
            <div className="link-wrap">
              <div className="links">
                <Link to="/" className="links">
                  Home
                </Link>
              </div>
              <div className="links">
                <Link to="/about" className="links">
                  About
                </Link>
              </div>
            </div>
          </nav>
          <Routes />
        </div>
      </HashRouter>
    );
  }
}
