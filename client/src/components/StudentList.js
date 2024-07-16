// src/components/StudentList.js

import React, { useState } from 'react';
import axios from 'axios';
import EditStudent from './EditStudent';

const StudentList = ({ students, fetchStudents }) => {
  const [editingStudent, setEditingStudent] = useState(null);

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/students/${id}`);
      fetchStudents();
    } catch (error) {
      console.error('Error deleting student', error);
    }
  };

  const startEditing = (student) => {
    setEditingStudent(student);
  };

  const stopEditing = () => {
    setEditingStudent(null);
    fetchStudents();
  };

  return (
    <div>
      <h2>Student List</h2>
      {students.map((student) => (
        <div key={student._id} className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">{student.name}</h5>
            <p className="card-text">Registration Number: {student.registrationNumber}</p>
            <p className="card-text">Branch: {student.branch}</p>
            <p className="card-text">Year: {student.year}</p>
            <p className="card-text">Total Marks: {student.totalMarks}</p>
            <button className="btn btn-primary mr-2" onClick={() => startEditing(student)}>Edit</button>
            <button className="btn btn-danger" onClick={() => deleteStudent(student._id)}>Delete</button>
          </div>
        </div>
      ))}
      {editingStudent && <EditStudent student={editingStudent} stopEditing={stopEditing} />}
    </div>
  );
};

export default StudentList;
