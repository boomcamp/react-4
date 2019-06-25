import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ClassList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
      currPage: ""
    };

  }

  componentDidMount() {
    axios
    .get(`http://localhost:9090/students?class=${this.props.match.params.class}`)
    .then(results => {
      this.setState({
        students: results.data,
      });
    });
    this.setState({
      currPage: this.props.match.params.class,
    })
  }

  render() {
    return (
      <div className="box">
        <div className="bread-crumb">
          <Link to="/"><h3>Home</h3></Link>
          <Link to={`/classlist/${this.state.currPage}`}><h3>{this.state.currPage}</h3></Link>
        </div>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {this.state.students.map((student, i) => (
          <Link key={student.id} to={{
            pathname: `/student/${student.id}`,
            state: {
              pastUrl: this.state.currPage
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

//