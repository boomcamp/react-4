import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";
import styled from "styled-components";

export default class ClassList extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
  }
  componentDidMount() {
    axios
      .get(
        `http://localhost:9090/students?class=${this.props.match.params.class}`
      )
      .then(res => this.setState({ students: res.data }));
  }

  render() {
    return (
      <div className="box">
        <Back>
          <TiArrowBack onClick={this.props.history.goBack} />
        </Back>
        <h1>{this.props.match.params.class}</h1>

        <h2>ClassList:</h2>
        {this.state.students.map(student => (
          <Link key={student.id} to={`/student/${student.id}`}>
            <h3>
              {student.first_name} {student.last_name}
            </h3>
          </Link>
        ))}
      </div>
    );
  }
}

const Back = styled.span`
  font-size: 60px;
  color: #143a56;
`;
