import React, { Component } from 'react';
import axios from 'axios';

export default class ClassList extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    axios
    .get(`localhost:9090/students?class=${this.props.match.params.class}`)
    .then(response => 
      this.setState({
        students: response.data
      })
    );
  }


  render() {
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {this.state.students.map((student, i) => (
            <h3 key={student.id}> 
                {student.first_name}
                {student.last_name}
            </h3>
          ))}
      </div>
    );
  }
}
