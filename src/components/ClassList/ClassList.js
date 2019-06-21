import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import back from './back.png';

export default class ClassList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:9090/students?class=${this.props.match.params.class}`)
      .then(res => 
        this.setState({ 
          students: res.data 
        })
        );
  }

  render() {
    return (
      <div className="box">
        <Link to = '/'>
        <img src={back} alt = "back" width="50px" height="50px" ></img>
        </Link>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {this.state.students.map((student) => (
          <Link key={student.id} to={`/student/${student.id}`}>
            <h3 key={student.id}>
              {student.first_name} {student.last_name}
            </h3>
          </Link>
        ))}
      </div>
    );
  }
}