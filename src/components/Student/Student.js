import React, { Component } from "react";
import axios from "axios";
import { TiArrowBack } from "react-icons/ti";
import styled from "styled-components";
export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      studentInfo: {}
    };
  }
  componentDidMount() {
    console.log(this.props);
    axios
      .get(`http://localhost:9090/students/${this.props.match.params.id}`)
      .then(res =>
        this.setState({
          studentInfo: res.data
        })
      );
  }
  render() {
    return (
      <div className="box">
        <Back>
          <TiArrowBack onClick={this.props.history.goBack} />
        </Back>
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

const Back = styled.span`
  font-size: 60px;
  color: #143a56;
`;
