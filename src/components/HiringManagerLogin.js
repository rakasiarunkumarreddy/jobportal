// src/components/HiringManagerLogin.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
          item.email === credentials.email && item.password === credentials.password
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
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2 style={titleStyle}>Hiring Manager Login</h2>
        <form onSubmit={handleLogin} style={formStyle}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#F0F4F8",
  animation: "fadeIn 1s ease-in-out",
};

const formContainerStyle = {
  background: "#ffffff",
  padding: "30px 40px",
  borderRadius: "12px",
  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
  width: "100%",
  maxWidth: "400px",
  animation: "slideDown 0.8s ease-out",
};

const titleStyle = {
  fontSize: "2rem",
  color: "#6A1B9A",
  marginBottom: "25px",
  fontWeight: "600",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "18px",
};

const inputStyle = {
  padding: "12px 18px",
  fontSize: "1.1rem",
  borderRadius: "8px",
  border: "1px solid #888",
  outline: "none",
  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
};

inputStyle[":focus"] = {
  borderColor: "#6A1B9A",
  boxShadow: "0 0 8px rgba(106, 27, 154, 0.5)",
};

const buttonStyle = {
  padding: "12px 20px",
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: "#fff",
  backgroundColor: "#6A1B9A",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "background-color 0.3s ease, transform 0.2s ease-in-out",
};

buttonStyle[":hover"] = {
  backgroundColor: "#8E24AA",
  transform: "scale(1.05)",
};

// Keyframes for animations
const keyframesStyles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes slideDown {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

// Add keyframes styles to the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = keyframesStyles;
document.head.appendChild(styleSheet);

export default HiringManagerLogin;
