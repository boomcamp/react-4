import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentInfo: {},
      path: "",
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:9090/students/${this.props.match.params.id}`)
      .then(response =>
         this.setState({ studentInfo: response.data, 
                        path: `/classlist/${response.data.class}`,
                      })
        );
  }
  
  render() {
    return (
      <div className="box">
        <Link to={this.state.path}><button className="btn-back"> back </button></Link>
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
