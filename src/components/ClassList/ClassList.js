import React, { Component } from 'react';
import axios from 'axios';
//import { threadId } from 'worker_threads';
import { Link } from 'react-router-dom';
import route from '../../routes';

export default class ClassList extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    };

  }

  componentDidMount() {
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
         <Link to="/" >
          <h3 className='backBtn'>Back</h3>
       </Link>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {this.state.students.map((students,i) =>
        <Link key={students.id} to={`/students/${students.id}`}>
          <h3 key={students.id}>
            {students.first_name} {students.last_name}
          </h3>
          </Link>
        )}
      </div>
    );
  }
}

