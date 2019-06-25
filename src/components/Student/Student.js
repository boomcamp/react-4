import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentInfo: {},
      location: "1",
    }
  }

  componentDidMount() {
    if(this.props.location.state.pastUrl != undefined) {
      this.setState({
        location: this.props.location.state.pastUrl,
      });
    }
    
    axios
      .get(`http://localhost:9090/students/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ 
          studentInfo: response.data,
        });
      });
  }

  render() {
    return (
      <div className='box'>
        <div className="bread-crumb">
          <Link to="/"><h3>Home</h3></Link>
          <Link to={`/classlist/${this.state.location}`}><h3>{this.state.location}</h3></Link>
          <Link to={`/student/${this.props.match.params.id}`} ><h3>{`Student-${this.props.match.params.id}`}</h3></Link>
        </div>
        <h1>Student:</h1>
        <h1>
          {this.state.studentInfo.first_name} {this.state.studentInfo.last_name}
        </h1>
        <h3>Grade: {this.state.studentInfo.grade}</h3>
        <h3>Email: {this.state.studentInfo.email}</h3>
      </div>
    );
  }
}
