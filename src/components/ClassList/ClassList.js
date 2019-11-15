import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
        students: res.data,
      })
    })
  }

  render() {
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {this.state.students.map((x, i) => (
          <Link to={`/student/${x.id}`} key={x.id}><h3 key={x.id}>
            {x.first_name} {x.last_name}
          </h3></Link>
        ))}
      </div>
    );
  }
}
