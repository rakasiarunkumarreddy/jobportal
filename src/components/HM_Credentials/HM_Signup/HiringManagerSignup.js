// src/components/HiringManagerSignup.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./HiringManagerSignup.css"; // Import the CSS file

const HiringManagerSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    password: "",
    confirmPassword: "",
    role: "Hiring Manager",
  });

  const navigate = useNavigate();

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "https://jobseeker-application-default-rtdb.firebaseio.com/hiringManagers.json",
        formData
      );
      console.log("Data submitted:", response.data);
      alert("Signup successful!");
      navigate("/hiring-manager/login");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Signup failed! Please try again.");
    }
  };

  const goToLoginPage = () => {
    navigate("/hiring-manager/login");
  };

  return (
    <div className="signupContainer">
      <div className="formContainerSignup">
        <h2 className="formTitle">Hiring Manager Signup</h2>
        <form onSubmit={handleSignupSubmit}>
          <input
            className="inputField"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleSignupChange}
            required
          />
          <input
            className="inputField"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleSignupChange}
            required
          />
          <input
            className="inputField"
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleSignupChange}
            required
          />
          <input
            className="inputField"
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleSignupChange}
            required
          />
          <input
            className="inputField"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleSignupChange}
            required
          />
          <input
            className="inputField"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleSignupChange}
            required
          />
          <button className="submitBtn" type="submit">
            Submit
          </button>
        </form>
        <p className="loginPrompt">
          Already a user?{" "}
          <button className="linkButton" onClick={goToLoginPage}>
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default HiringManagerSignup;
