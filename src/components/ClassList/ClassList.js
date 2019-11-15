import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ClassList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:9090/students?class=${this.props.match.params.class}`)
      .then(res => {
        console.log(res);
        this.setState({
          students: res.data
        });
      });
  }

  render() {
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        <ul>
          {this.state.students.map(stud => {
            return (
              <Link key={stud.id} to={`/student/${stud.id}`}>
                <h3 key={stud.id}>
                  {stud.first_name} {stud.last_name}
                </h3>
              </Link>
            )
          })}
        </ul>
      </div>
    );
  }
}
