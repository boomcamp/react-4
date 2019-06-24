import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentInfo: {}
    }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:9090/students/${this.props.match.params.id}`)
      .then(response => this.setState({ studentInfo: response.data }));
  }

  render() {
    return (
      <div className='box'>
        <div>
          <Link to="/">Home</Link>
          <Link to="/">{this.props.back}</Link>
        </div>
        <h1>Student:</h1>
        <h1>
          {this.state.studentInfo.first_name} {this.state.studentInfo.last_name}
        </h1>
        <h3>Grade: {this.state.studentInfo.grade}</h3>
        <h3>Email: {this.state.studentInfo.email}</h3>
      </div>
    );
  }
}
