import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./JobSeekerSignup.css"; // Import the CSS file
import Alert from "../../alert/Alert"; // Import the Alert component

const JobSeekerSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validateMobile = (mobile) => {
    const re = /^\d{10}$/;
    return re.test(String(mobile));
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      alert("Invalid email format!");
      return;
    }
    if (!validateMobile(formData.mobile)) {
      alert("Mobile number should be 10 digits!");
      return;
    }
    if (!validatePassword(formData.password)) {
      alert("Password should be at least 8 characters long!");
      return;
    }

    try {
      const databaseUrl =
        "https://jobseeker-application-default-rtdb.firebaseio.com/jobSeekers.json";

      // Check if email already exists
      const response = await axios.get(databaseUrl);
      const existingData = response.data;

      let emailAlreadyExists = false;
      for (let key in existingData) {
        if (existingData[key].email === formData.email) {
          emailAlreadyExists = true;
          break;
        }
      }

      if (emailAlreadyExists) {
        setAlertMessage("User already signed up with this email!");
        setShowAlert(true);
        // Clear input fields
        setFormData({
          name: "",
          email: "",
          password: "",
          mobile: "",
        });
      } else {
        // Submit data to Firebase
        await axios.post(databaseUrl, formData);

        // Show success alert and navigate to the login page
        setAlertMessage("Signup Successful");
        setShowAlert(true);
        setTimeout(() => {
          navigate("/job-seeker/login");
        }, 3000);
      }
    } catch (err) {
      setError("Error submitting data. Please try again.");
      setAlertMessage("Signup failed! Please try again.");
      setShowAlert(true);
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
      {showAlert && (
        <Alert
          message={alertMessage}
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  );
};

export default JobSeekerSignup;
