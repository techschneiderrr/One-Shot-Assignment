import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const College = props => (
  <tr>
    <td><Link to={`/students?college=${props.college.name}`} style={{ textDecoration: 'none', color:'white'}}>
    {props.college.name}</Link>
    </td>
    
    <td >{props.college.founded}</td>
    <td >{props.college.city}</td>
    <td >{props.college.state}</td>
    <td>{props.college.country}</td>
    <td>{props.college.no_of_students}</td>
    <td>{props.college.courses}</td>
    <td>
      <Link style={{ textDecoration: 'none' }} to={"/edit/"+props.college._id}><span style={{color: 'yellow'}}>edit</span></Link> | <a href="#" style={{ textDecoration: 'none', color:'red' }} onClick={() => { props.deleteCollege(props.college._id) }}>delete</a>
    </td>
  </tr>
)

export default class CollegeList extends Component {
  constructor(props) {
    super(props);
    this.deleteCollege = this.deleteCollege.bind(this)
    this.state = {colleges: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/colleges/')
      .then(response => {
        this.setState({ colleges: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteCollege(id) {
    axios.delete('http://localhost:5000/colleges/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      colleges: this.state.colleges.filter(el => el._id !== id)
    })
  }

  collegeList() {
    return this.state.colleges.map(currentcollege => {
      return <College college={currentcollege} deleteCollege={this.deleteCollege} key={currentcollege._id}/>;
    })
  }

  render() {
    return (
      <div className='container'>
        <h3>Colleges</h3>
        <Table responsive striped bordered hover variant="dark" className="table">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th >Year Founded</th>
              <th >City</th>
              <th >State</th>
              <th>Country</th>
              <th>Number of students</th>
              <th>Course</th>
              <th>Modify</th>
            </tr>
          </thead>
          <tbody>
            { this.collegeList() }
          </tbody>
        </Table>
      </div>
    )
  }
}