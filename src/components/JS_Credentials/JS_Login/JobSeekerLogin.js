import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./JobSeekerLogin.css";
import Alert from "../../alert/Alert"; 

const JobSeekerLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);
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

      const seekers = Object.values(response.data || {});
      const validUser = seekers.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );

      if (validUser) {
        const loginDetailsUrl =
          "https://jobseeker-application-default-rtdb.firebaseio.com/jobSeekerLoginDetails.json";
        const loginResponse = await axios.get(loginDetailsUrl);
        const loginDetails = loginResponse.data;

        if (loginDetails && Object.keys(loginDetails).length > 0) {
          const existingKey = Object.keys(loginDetails)[0];
          const updateUrl = `https://jobseeker-application-default-rtdb.firebaseio.com/jobSeekerLoginDetails/${existingKey}.json`;

          await axios.put(updateUrl, {
            email: formData.email,
            password: formData.password,
          });
        } else {
          await axios.post(loginDetailsUrl, {
            email: formData.email,
            password: formData.password,
          });
        }

        setShowAlert(true); // Show the alert
        setTimeout(() => {
          navigate("/job-seeker/ui");
        }, 500); // Navigate after the alert disappears
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("Error logging in. Please try again.");
      console.error("Firebase submission error:", err);
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
      {showAlert && (
        <Alert message="Login Successful" onClose={() => setShowAlert(false)} />
      )}
    </div>
  );
};

export default JobSeekerLogin;
