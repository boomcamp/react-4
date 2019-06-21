import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
        this.setState({ students: res.data });
      });
  }

  render() {
    const {students} = this.state;

    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {students.map((list, i) => (
          <Link key={list.id} to={`/students/${list.id}`}>
              <h3 key={list.id}>
                  {list.first_name} {list.last_name}
              </h3>
          </Link>
        ))}
      </div>
    );
  }
}
