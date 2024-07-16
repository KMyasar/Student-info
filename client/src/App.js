import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
      <AddStudent fetchStudents={fetchStudents} />
      <StudentList students={students} fetchStudents={fetchStudents} />
    </div>
  );
};

export default App;
