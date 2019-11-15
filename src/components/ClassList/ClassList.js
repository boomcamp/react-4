import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class ClassList extends Component {
  constructor() {
    super();

    this.state = {
      student: []
    };
  }

  componentDidMount(){
    axios
      .get(`http://localhost:9090/students?class=${this.props.match.params.class}`)
      .then(res =>{
        this.setState({
          student: res.data,
        });
      });
  }
  

  render() {
    return (
     
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {this.state.student.map((student, i) =>( 
          <Link key={student.id} to={`/students/${student.id}`}>
            <h3 key={ student.id }>
              {student.first_name} {student.last_name}
            </h3>
          </Link>  
        ))}
      </div>
      
   
    );
  }
}
