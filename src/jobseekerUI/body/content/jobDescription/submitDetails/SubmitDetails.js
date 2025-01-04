import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { db1, ref, push } from '../../../../../firebase';
import './submitDetails.css';

const SubmitDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { jobTitle, companyName } = location.state || {};

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    role: '',
    photo: '',
    gender: '',
    experience: '',
    jobTitle: jobTitle || '',
    companyName: companyName || ''
  });
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reference to the new child location for the form data in db1
    const newFormDataRef = ref(db1, 'formData');
    push(newFormDataRef, formData)
      .then(() => {
        console.log('Form data saved successfully.');
        setShowMessage(true); // Show the confirmation message
      })
      .catch((error) => {
        console.error('Error saving form data:', error);
      });
  };

  const handleGoHome = () => {
    navigate('/job-seeker/ui'); // Navigate to job-seeker UI page
  };

  return (
    <div className="submitDetails">
      {showMessage && (
        <div className="topConfirmation">
          <button className="goHomeButton" onClick={handleGoHome}>Go to Home</button>
        </div>
      )}
      <h1>Submit Details</h1>
      <form onSubmit={handleSubmit}>
        {jobTitle && (
          <p><strong>Job Title:</strong> {jobTitle}</p>
        )}
        {companyName && (
          <p><strong>Company Name:</strong> {companyName}</p>
        )}
        <label>
          Full Name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Phone Number:
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </label>
        <label>
          Role:
          <input type="text" name="role" value={formData.role} onChange={handleChange} required />
        </label>
        <label>
          Upload Photo:
          <input type="file" name="photo" onChange={handleChange} />
        </label>
        <label>
          Gender:
          <label>
            <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} required />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} required />
            Female
          </label>
        </label>
        <label>
          Experience:
          <input type="text" name="experience" value={formData.experience} onChange={handleChange} required />
        </label>
        <button type="submit" className="submitButton">Submit</button>
      </form>
      {showMessage && (
        <div className="confirmationMessage">Form submitted successfully!</div>
      )}
    </div>
  );
};

export default SubmitDetails;
