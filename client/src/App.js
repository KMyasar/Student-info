import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes, Link } from 'react-router-dom';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';

const App = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:5001/students');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students', error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Student Management System</h1>
        <div>
          <span className="mr-3">Developer Name: Mohamed Yasar Arafath&nbsp;</span> 
          <span>Register Number: 23IT102</span>
        </div>
      </div>
      <nav className="mb-4">
        <Link to="/" className="btn btn-primary mr-2" style={{ marginRight: '10px' }}>Add Student</Link>
        <Link to="/list" className="btn btn-secondary">Student List</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<AddStudent fetchStudents={fetchStudents} />} />
        <Route path="/list" element={<StudentList students={students} fetchStudents={fetchStudents} />} />
      </Routes>
    </div>
  );
};

export default App;
