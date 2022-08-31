import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';


const Student = props => (
  
  <tr>
    <td >{props.student.name}</td>
    <td >{props.student.batch_year}</td>
    <td >{props.student.college_id}</td>
    <td >{props.student.skills}</td>
    <td >{props.student.college}</td>
  </tr>
)

export default class StudentList extends Component {
  constructor(props) {
    super(props);
    //this.deleteStudent = this.deleteStudent.bind(this);
    this.state = {students: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/students/')
      .then(response => {
        this.setState({ students: response.data });
        //Just a song this think youconsole.warn(this.state.students, this.state.students.filter(student => student.college === "VITX"));
      })
      .catch((error) => {
        console.log(error);
      })
    }

  deleteStudents(id) {
    axios.delete('http://localhost:5000/students/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      students: this.state.students.filter(el => el._id !== id)
    })
  }

  studentList() {
    const urlParams = new URLSearchParams(window.location.search);
    return this.state.students.filter(student => student.college === urlParams.get("college")).map(currentstudent => {
      return <Student student={currentstudent} deleteStudent={this.deleteStudent} key={currentstudent._id}/>;
    });
  }

  render() {
    return (
      <div className='container'>
        <h3>Students</h3>
        <Table responsive striped bordered hover variant="dark" className="table">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th >Batch Year</th>
              <th >College ID</th>
              <th >Skills</th>
              <th>College</th>
            </tr>
          </thead>
          <tbody>
            { this.studentList() }
          </tbody>
        </Table>
      </div>
    )
  }
}