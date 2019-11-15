import React, { Component } from 'react';
import Axios from 'axios';
import { Link, Route } from 'react-router-dom';
export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      studentInfo: [],
    }
  }
  componentDidMount() {
    Axios
      .get(`http://localhost:9090/students/${this.props.match.params.id}`)
      .then((results) => {
        // console.log(results.data)
        this.setState({ studentInfo: results.data });
      })
  }

  render() {
    return (
      <div className="box">
        <h1>{this.state.studentInfo.first_name}{" "}{this.state.studentInfo.last_name}</h1>
        <h3>{this.state.studentInfo.grade}</h3>
        <h3>{this.state.studentInfo.email}</h3>
        <Link to={`/classlist/${this.state.studentInfo.class}`}>
          <button>Back</button>
        </Link>
      </div>
    );
  }
}
