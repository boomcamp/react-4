import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import back from './back.png';

export default class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentInfo: {},
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:9090/students/${this.props.match.params.id}`)
      .then(response => this.setState({ studentInfo: response.data }));
  }

  render() {
    return (
      <div className="box">
        <Link to={`/classList/${this.state.studentInfo.class}`} >
        <img src={back} alt = "back" width="50px" height="50px" /> 
        </Link>
        <h1>Student</h1>
        <h1>
          {this.state.studentInfo.first_name} {this.state.studentInfo.last_name}
        </h1>
        <h3>Grade: {this.state.studentInfo.grade}</h3>
        <h3>Email: {this.state.studentInfo.email}</h3>
      </div>
    );
  }
}