import React, { Component } from 'react';
import axios from 'axios';


import { Link } from 'react-router-dom';

export default class ClassList extends Component {
  constructor(props) {
    super();
      this.state = {
        students: [],
      }
  }

  componentDidMount() {
    let className = this.props.match.params.class;
    axios
      .get('http://localhost:9090/students?class='+className)
      .then(results => { this.setState({students:results.data})});
  }



  render() {
    const classname = this.props.match.params.class;
    return (
      
      <div className="box">
        <Link to="/">
          <button className="btn">Return</button>
        </Link>
        <h1>{classname}</h1>
        <h2>ClassList:</h2>
        {this.state.students.map((student, i) => (
          <Link key={ student.id } to={`/student/${student.id}/${classname}`}>
          <h3 key={ student.id } >
            {student.first_name} {student.last_name}
          </h3>
          </Link>
        ))}
      </div>
    );
  }
}
