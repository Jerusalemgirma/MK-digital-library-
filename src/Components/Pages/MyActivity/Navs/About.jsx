import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css'; 

const About = () => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate('/editabout'); 
  };

  return (
    <div className="about-page">
      <button className="edit-button" onClick={handleEditClick}>Edit</button>
      <div className="about-content">
        <div className="about-description">
          <h2>Little About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. 
            Cras euismod cursus mauris, sed feugiat nunc scelerisque a. Fusce ac elementum urna. Donec auctor 
            sapien vel erat fermentum, eget cursus urna faucibus. Donec ultricies ligula at dolor bibendum congue.
          </p>
        </div>
        <div className="about-details">
          <p><strong>Name:</strong> Meba</p>
          <p><strong>Phone Number:</strong> 0912345678</p>
          <p><strong>Email:</strong> meba@gmail.com</p>
          <p><strong>Gender:</strong> Male</p>
        </div>
      </div>
    </div>
  );
};

export default About;
