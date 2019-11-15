import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class ClassList extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:9090/students?class=${this.props.match.params.class}`
      )
      .then(response => {
        this.setState({ students: response.data });
      });
  }

  render() {
    return (
      <div className="box">
        <button onClick={this.props.history.goBack}>Back</button>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {this.state.students.map(student => (
          <Link key={student.id} to={`/student/${student.id}`}>
            <h3>
              {student.first_name} {student.last_name}
            </h3>
          </Link>
        ))}
      </div>
    );
  }
}
