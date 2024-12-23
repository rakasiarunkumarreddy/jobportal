import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

// CSS-in-JS
const styleSheet = `
  /* General page background with animated gradient */
  .job-seeker-signup {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    animation: fadeIn 1s ease-out;
    background: linear-gradient(45deg, #6c5ce7, #00b894);
    background-size: 400% 400%;
    animation: gradientAnimation 6s ease infinite;
  }

  /* Signup form container */
  .signup-form {
    background: rgba(255, 255, 255, 0.8);
    padding: 40px 50px;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px;
    animation: slideUp 1s ease-out;
  }

  .title {
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
    animation: fadeInTitle 1s ease-out;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    animation: slideInput 0.5s ease-out;
  }

  label {
    margin-bottom: 8px;
    font-size: 1.1rem;
    color: #333;
  }

  .input-field {
    padding: 12px;
    font-size: 1rem;
    border-radius: 8px;
    border: 2px solid #ddd;
    transition: all 0.3s ease;
  }

  .input-field:focus {
    border-color: #FF6F61;
    box-shadow: 0 0 5px rgba(255, 111, 97, 0.7);
    background-color: #FFEBEB;
  }

  .error-message {
    color: red;
    font-size: 1rem;
    animation: fadeInError 1s ease-out;
    margin-top: 10px;
  }

  .signup-button {
    background-color: #1D4E89;
    color: white;
    padding: 14px;
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    animation: fadeInButton 1s ease-out;
  }

  .signup-button:hover {
    background-color: #FF6F61;
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(255, 111, 97, 0.5);
  }

  .login-link {
    margin-top: 15px;
    font-size: 1rem;
    text-align: center;
  }

  .login-link a {
    color: #1D4E89;
    text-decoration: none;
    font-weight: bold;
    transition: all 0.3s ease;
  }

  .login-link a:hover {
    color: #FF6F61;
    text-decoration: underline;
  }

  /* Keyframe Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes slideUp {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideInput {
    from {
      transform: translateX(-20px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes fadeInError {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeInButton {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeInTitle {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

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
      navigate("/job-seeker/login");
    } catch (err) {
      setError("Error submitting data. Please try again.");
      console.error("Firebase submission error:", err);
    }
  };

  return (
    <>
      <style>{styleSheet}</style>
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
              If you are already a user, <Link to="/job-seeker/login">click here to login</Link>.
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default JobSeekerSignup;
