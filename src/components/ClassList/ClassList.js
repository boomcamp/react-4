import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Dialog, TextField} from '@material-ui/core'
export default class ClassList extends Component {
  constructor() {
    super();
    this.state ={
      students: [],
      firstname: '',
      lastname: '',
      email: '',
      grade: '',
      open: false 
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
Add = () => {
  axios
  .post(`http://localhost:9090/students`, {
    first_name: this.state.firstname,
    last_name: this.state.lastname,
    email: this.state.email,
    class: this.props.match.params.class,
    grade: this.state.grade,
  }).then(res => this.setState({
    students: [...this.state.students, res.data],
    open: false
  }))
}

  render() {
    return (
      <div className="box">
        <Link to="/"><button className="back-btn">↩</button></Link>
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {this.state.students.map((students, i) => (
          <Link key={students.id} to={`/student/${students.id}`}>
            <h3 key={students.id}>
            {students.first_name} {students.last_name}
            </h3>
          </Link>
        ))}
        <Dialog className="modal" open={this.state.open} onClose={()=> this.setState({open: false})}>
          <div className="text">
          <TextField margin="dense" value={this.state.firstname} onChange={e => this.setState({firstname: e.target.value})} label="FirstName"/>
          <TextField margin="dense" value={this.state.lastname} onChange={e => this.setState({lastname: e.target.value})} label="LastName"/>
          <TextField margin="dense" value={this.state.email} onChange={e => this.setState({email: e.target.value})} label="Email"/>
          <TextField margin="dense" value={this.props.match.params.class} label="Class"/>
          <TextField margin="dense" value={this.state.grade} onChange={e => this.setState({grade: e.target.value})} label="Grade"/>
          <button onClick={this.Add}><span>➕</span></button>
          </div>
        </Dialog>
        <button className="btn-add" onClick={()=> this.setState({open: true})}>Add student</button>
      </div>
    );
  }
}