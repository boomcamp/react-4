import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentInfo: {},
    }
  }

  componentDidMount() {
    //console.log(this.props.history)
    axios
      .get(`http://localhost:9090/students/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          studentInfo : res.data
        })
      })
  }

  render() {
    return (
      <div className="box">
        <Link to={`/classlist/${this.state.studentInfo.class}`}><button>back</button></Link>
        <h1>Student</h1>
        <h1>{this.state.studentInfo.first_name} {this.state.studentInfo.last_name}</h1>
        <h3>Grade: {this.state.studentInfo.grade}</h3>
        <h3>Email: {this.state.studentInfo.email}</h3>
      </div>
    );
  }
}
