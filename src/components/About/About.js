import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="subnav">
          <Link path="/about" className="subnav_links">
            <h3>About</h3>
          </Link>
          <Link path="/about/history" className="subnav_links">
            <h3>History</h3>
          </Link>
          <Link path="/about/contact" className="subnav_links">
            <h3>Contact</h3>
          </Link>
        </div>
        <div className="box" />
      </div>
    );
  }
}
