import React from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import {useParams} from 'react-router-dom';

const Student = props => (
  <tr>
    <td>{props.name}</td>
    <td >{props.batch_year}</td>
    <td >{props.college_id}</td>
    <td >{props.gender}</td>
    <td >{props.phone}</td>
    <td >{props.skills}</td>
    <td >{props.college}</td>
  </tr>
)

const StudentDetails = () => {
    const params = useParams();
    const [student, setStudent] = React.useState({});

    React.useEffect(() => {
        axios.get('http://localhost:5000/students/'+ params.id)
          .then(response => {
            setStudent(response.data);
          })
          .catch((error) => {
            console.log(error);
          })
    }, );

    return (
        <div className='container'>
          <h3>Student Details</h3>
            <Table responsive striped bordered hover variant="dark" className="table">
              <thead className="thead-dark">
                <tr>
                  <th>Name</th>
                  <th >Batch Year</th>
                  <th >College ID</th>
                  <th >Gender</th>
                  <th>Phone</th>
                  <th >Skills</th>
                  <th>College</th>
                </tr>
              </thead>
              <tbody>
                <Student {...student}></Student>
              </tbody>
            </Table>
        </div>
      )
  }

export default StudentDetails;