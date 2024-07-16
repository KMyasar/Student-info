// src/components/EditStudent.js

import React, { useState } from 'react';
import axios from 'axios';

const EditStudent = ({ student, stopEditing }) => {
  const [formData, setFormData] = useState(student);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5001/students/${student._id}`, formData);
      stopEditing();
    } catch (error) {
      console.error('Error updating student', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Edit Student Details</h2>
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
        <button type="submit" className="btn btn-primary mt-3">Update Student</button>
        <button type="button" className="btn btn-secondary mt-3 ml-3" onClick={stopEditing}>Cancel</button>
      </form>
    </div>
  );
};

export default EditStudent;
