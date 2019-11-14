import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
export default class ClassList extends Component {
  constructor() {
    super();
    this.state ={
      students: []
    };
  }
  componentDidMount(){
    axios
    .get(`http://localhost:9090/students?class=${this.props.match.params.class}`)
    .then(results =>{
      this.setState({
        students: results.data,
      })
    })
  }

  render() {
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {this.state.students.map((students, i) => (
          <Link key={students.id} to={`/student/${students.id}`}>
            <h3 key={students.id}>
            {students.first_name} 
            {students.last_name}
            </h3>
          </Link>
        ))}
        <Link to="/"><button className="back-btn">Balik</button></Link>
      </div>
    );
  }
}
