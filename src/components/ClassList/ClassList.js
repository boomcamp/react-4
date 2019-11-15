import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class ClassList extends Component {
  constructor() {
    super();
    this.state = { 
      students: []
    }
  }

  componentDidMount(){
    axios
      .get(`http://localhost:9090/students?class=${this.props.match.params.class}`)
      .then(res => {
        this.setState({
          students: res.data
        })
      })
  }

  render() {
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {this.state.students.map(student => (
          <Link key={student.id} to={`/student/${student.id}`}>
            <h4 key={student.id}>{student.first_name} {student.last_name}</h4>
          </Link>
        ))}
        <button onClick={this.props.history.goBack}>Back</button>
      </div>
    );
  }
}
