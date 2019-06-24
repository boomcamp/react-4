import React, { Component } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
export default class Student extends Component {
  constructor(props) {
    super();
    this.state = {
      studentInfo:{},
    };
  }
  componentDidMount() {
   
    let id = this.props.match.params.id;
    axios
      .get('http://localhost:9090/students/'+id)
      .then(res => this.setState({studentInfo:res.data}));
  }

  render() {
     const classname = this.props.match.params.class;
    return (
      <div className="box">
        <Link to={ '/classlist/'+classname } >
          <button className="btn">Return</button>
        </Link>
        <h1>Student</h1>
        <h1>
        {this.state.studentInfo.first_name} {this.state.studentInfo.last_name} 
        </h1>
        <h3>Grade: {this.state.studentInfo.grade}</h3>
        <h3>Email: {this.state.studentInfo.email}</h3>
      </div>
    );
  }
}
