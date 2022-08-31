import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter , Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import Dashboard from "./components/dashboard.component";
import CollegeList from "./components/colleges-list.component";
import StudentList from "./components/students-list.component";
import StudentDetails from "./components/student-details.component";
// import CreateStudent from "./components/create-student.component";

function App() {
  return (
    <BrowserRouter>
    
      <Navbar />
      <br/>
      <Routes> 
      <Route path="/" exact element={<Dashboard />} />
      <Route path="/colleges" element={<CollegeList />} />
      <Route path="/students" element={<StudentList />} />
      <Route path="/students/:id" element={<StudentDetails />} />
      {/* <Route path="/colleges/students" component={CreateStudent} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;