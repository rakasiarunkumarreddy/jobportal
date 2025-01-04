// src/components/JobSeekerSignup.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./JobSeekerSignup.css"; // Import the CSS file

const JobSeekerSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const databaseUrl =
        "https://jobseeker-application-default-rtdb.firebaseio.com/jobSeekers.json";

      // Submit data to Firebase
      await axios.post(databaseUrl, formData);

      // Navigate to the login page
      alert("SignUp Successful")
      navigate("/job-seeker/login");
    } catch (err) {
      setError("Error submitting data. Please try again.");
      console.error("Firebase submission error:", err);
    }
  };

  return (
    <div className="job-seeker-signup">
      <div className="signup-form">
        <h2 className="title">Job Seeker Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          <div className="input-group">
            <label>Mobile Number:</label>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="input-field"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="signup-button">
            Signup
          </button>
          <div className="login-link">
            If you are already a user,{" "}
            <Link to="/job-seeker/login">click here to login</Link>.
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobSeekerSignup;
