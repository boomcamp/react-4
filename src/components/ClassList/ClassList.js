import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super();

    this.state = {
      students: []
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:9090/students?class=${this.props.match.params.class}`)
          .then(datas=>{
            this.setState({
              students: datas.data
            });
          })
          .catch(e=>console.warn(e));
  }

  render() {
    return (
      <div className="box">
        <h1 />
    <h2>{this.props.match.params.class}</h2>
        {
          this.state.students.map(student=>{
            return <Link key={student.id} to={`/student/${student.id}/${this.props.match.params.class}`}>
                      <h3 key={student.id}>
                          {student.first_name}{student.last_name}
                      </h3>
                   </Link>
          })
        }
        {/* link to home */}
        <Link to={`/`}>
          <button>Back</button>
        </Link>

      </div>
    );
  }
}
