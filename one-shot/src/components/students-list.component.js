import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';


const Student = props => (
  
  <tr>
    <td>
      <Link to={`/students?college=${props.college.name}`} style={{ textDecoration: 'none', color:'white'}}>
        {props.student.name}
      </Link>
    </td>
    
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
    this.viewStudents = [];
  }

  componentDidMount() {
    axios.get('http://localhost:5000/students/')
      .then(response => {
        this.setState({ students: response.data });
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

  students() {
    const urlParams = new URLSearchParams(window.location.search);
    this.viewStudents = this.state.students.filter(student => student.college === urlParams.get("college")).map(currentstudent => {
      return <Student student={currentstudent} deleteStudent={this.deleteStudent} key={currentstudent._id}/>;
    });
    return this.viewStudents;
  }

  
  render() {
    return (
      <div className='container'>
        <h3>Students</h3>
        {this.viewStudents.length === 0 ? "No students found" : ""}
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
              { this.students() }
            </tbody>
          </Table>
      </div>
    )
  }
}