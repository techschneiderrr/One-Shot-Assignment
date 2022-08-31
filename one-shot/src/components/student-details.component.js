import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const College = props => (
  <tr>
    <td>{props.student.name}</td>
    <td >{props.student.batch_year}</td>
    <td >{props.student.college_id}</td>
    <td >{props.student.skills}</td>
    <td >{props.student.college}</td>
  </tr>
)

export default class StudentDetails extends Component {
  constructor(props) {
    super(props);
    // this.deleteCollege = this.deleteCollege.bind(this)
    this.state = {students: []};
    this.viewDetails = [];
  }

  componentDidMount() {
    axios.get('http://localhost:5000/students/')
      .then(response => {
        this.setState({ students: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }


  studentDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    this.viewDetails = urlParams.get("id");
    console.log(this.viewDetails);
    return this.state.students.map(currentdetail => {
      return <College college={currentdetail} deleteCollege={this.deleteCollege} key={currentdetail._id}/>;
    })
  }

  render() {
    return (
        <div className='container'>
          <h3>Student Details</h3>
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