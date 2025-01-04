// src/components/JobSeekerLogin.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./JobSeekerLogin.css"; // Import the CSS file

const JobSeekerLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
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

      const response = await axios.get(databaseUrl);

      // Check if credentials match
      const seekers = Object.values(response.data || {});
      const validUser = seekers.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );

      if (validUser) {
        alert("Login Successful")
        navigate("/job-seeker/ui");

      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("Error logging in. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="container">
      <div className="formContainer">
        <h2 className="title">Job Seeker Login</h2>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="input"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="input"
            required
          />
          {error && <p className="error">{error}</p>}
          <button type="submit" className="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobSeekerLogin;
