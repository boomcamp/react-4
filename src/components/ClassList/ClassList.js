import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super();
    this.state={
      students: []
    }
  }

  componentDidMount(){
    axios
      .get(`http://localhost:9090/students?class=${this.props.match.params.class}`)
      .then(res=>{
        this.setState({
          students: res.data,
        });
      })
  }
  render() {
    return (
      <div className="box">
        <Link to='/'>
          <h3>Back</h3>
        </Link>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {this.state.students.map(stud=>(
          <Link key = {stud.id} to ={`/student/${stud.id}`} class={this.props.match.params.class}>
          <h3 >
            {stud.first_name}, {stud.last_name}
          </h3>
          </Link>
        ))}
      </div>
    );
  }
}
