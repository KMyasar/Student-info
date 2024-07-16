// src/components/AddStudent.js
import React, { useState } from 'react';
import axios from 'axios';

const AddStudent = ({ fetchStudents }) => {
  const [formData, setFormData] = useState({
    registrationNumber: '',
    name: '',
    branch: '',
    year: '',
    totalMarks: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/students', formData);
      fetchStudents();
    } catch (error) {
      console.error('Error adding student', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Student Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Registration Number</label>
          <input
            type="text"
            className="form-control"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            placeholder="Registration Number"
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label>Branch</label>
          <input
            type="text"
            className="form-control"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            placeholder="Branch"
          />
        </div>
        <div className="form-group">
          <label>Year</label>
          <input
            type="number"
            className="form-control"
            name="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="Year"
          />
        </div>
        <div className="form-group">
          <label>Total Marks</label>
          <input
            type="number"
            className="form-control"
            name="totalMarks"
            value={formData.totalMarks}
            onChange={handleChange}
            placeholder="Total Marks"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
