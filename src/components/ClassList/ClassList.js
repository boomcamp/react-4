import React, { Component } from 'react';

export default class ClassList extends Component {
  constructor() {
    super();

    this.state = {
      students: []
    };
  }

  componentDidMount(){
    axios
      .get(`http://localhost:9090/students?class${this.props.match.params.class}`)
      .then(result => {
        this.setState({
          students: result.data
        });
      });
  }

  render() {
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {this.state.students.map((student, i) => (
          <h3 key={student.id}>
            {student.first_name} {student.last_name}
          </h3>
        ))}
      </div>
    );
  }
}
