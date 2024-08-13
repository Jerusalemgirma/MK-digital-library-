import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './editabout.css'; 
const EditAbout = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: 'Meba',
    phoneNumber: '0912345678',
    email: 'meba@gmail.com',
    gender: 'Male'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    navigate('/manageaccount#about'); 
  };

  return (
    <div className="edit-about-page">
      <h2>Edit Your Information</h2>
      <form className="edit-about-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button type="submit" className="save-button">Save</button>
        <button
          type="button"
          className="cancel-button"
          onClick={() => navigate('/manageaccount#about')}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditAbout;
