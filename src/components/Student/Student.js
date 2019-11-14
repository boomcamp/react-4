import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentInfo: {}
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:9090/students/${this.props.match.params.id}`)
      .then(results =>
        this.setState(
          {
            studentInfo: results.data
          },
          console.log(results)
        )
      );
  }

  render() {
    return (
      <div className="box">
        <h1>Student</h1>
        <h1>
          {this.state.studentInfo.first_name}
          {this.state.studentInfo.last_name}
        </h1>
        <h3>Grade: {this.state.studentInfo.grade}</h3>
        <h3>Email: {this.state.studentInfo.email}</h3>
        <Link
          key={this.state.studentInfo.id}
          to={`/classlist/${this.state.studentInfo.class}`}
        >
          <button className="back">Back</button>
        </Link>
      </div>
    );
  }
}
