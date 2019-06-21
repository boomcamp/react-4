import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class ClassList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
    };

  }

  componentDidMount(){
    axios
    .get(`http://localhost:9090/students?class=${this.props.match.params.class}`)
    .then(res => {
      this.setState({
        students: res.data,
      });
    });
  }

  render() {
    return (
      <div className="box">
        <Link to="/">
          <button>Back</button>
        </Link>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {this.state.students.map(student => (
          <Link key={student.id} to={{
            pathname: `/student/${student.id}`,
            state: {
              subject: this.props.match.params.class
            }
          }}>
            <h3 key={student.id}>
              {student.first_name} {student.last_name}
            </h3>
          </Link>
        ))}
      </div>
    );
  }
}
