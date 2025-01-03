// src/components/HiringManagerLogin.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./HiringManagerLogin.css"; // Import the CSS file

const HiringManagerLogin = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "https://jobseeker-application-default-rtdb.firebaseio.com/hiringManagers.json"
      );
      const data = response.data;

      const user = Object.values(data).find(
        (item) =>
          item.email === credentials.email &&
          item.password === credentials.password
      );

      if (user) {
        alert("Login successful!");
        navigate("/hiring-manager/ui");
      } else {
        alert("Invalid credentials!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed! Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="formContainer">
        <h2 className="title">Hiring Manager Login</h2>
        <form onSubmit={handleLogin} className="form">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            className="input"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            className="input"
            required
          />
          <button type="submit" className="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default HiringManagerLogin;
