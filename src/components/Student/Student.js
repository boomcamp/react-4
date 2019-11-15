import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';



export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentInfo :{},
    };
  
  }
  componentDidMount(){
    axios
    .get(`http://localhost:9090/students/${this.props.match.params.id}`)
    .then(response => this.setState({studentInfo: response.data}))

  }

  render() {
    return (
      <div className="box">
        <h1>Student</h1>
        <h2>Name: {this.state.studentInfo.first_name}  {this.state.studentInfo.last_name}</h2>
        <h2>Email: {this.state.studentInfo.email}</h2> 
        <h2>Grade: {this.state.studentInfo.grade}</h2>

        <Link to= {`/classlist/${this.state.studentInfo.class}`}><button className="btn">Back</button></Link>
      </div>
    );
  }
}
