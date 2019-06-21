import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class ClassList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    }
  }

  componentDidMount() {
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
        <Link to='/'><button>back</button></Link>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {this.state.students.map(s => (
          <Link key={s.id} to={`/student/${s.id}`}><h3>{s.first_name} {s.last_name}</h3></Link>
        ))}
      </div>
    );
  }
}
