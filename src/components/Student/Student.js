import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentInfo: {},
    }
  }
  
  componentDidMount() {
    axios
      .get(`http://localhost:9090/students/${this.props.match.params.id}`)
      .then(response => this.setState({
        studentInfo: response.data
      }));
  }

  render() {
    return (
      <div className="box">
        <Link key={`${this.props.match.params.class}`} to={`../classlist/${this.props.match.params.class}`} className="back_link">
          <h3>Back</h3>
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
