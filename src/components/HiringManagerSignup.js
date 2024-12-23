import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HiringManagerSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    password: "",
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
    <div style={styles.signupContainer}>
      <div style={styles.formContainerSignup}>
        <h2 style={styles.formTitle}>Hiring Manager Signup</h2>
        <form onSubmit={handleSignupSubmit}>
          <input
            style={styles.inputField}
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleSignupChange}
            required
          />
          <input
            style={styles.inputField}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleSignupChange}
            required
          />
          <input
            style={styles.inputField}
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleSignupChange}
            required
          />
          <input
            style={styles.inputField}
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleSignupChange}
            required
          />
          <input
            style={styles.inputField}
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleSignupChange}
            required
          />
          <button style={styles.submitBtn} type="submit">
            Submit
          </button>
        </form>
        <p style={styles.loginPrompt}>
          Already a user? <button style={styles.linkButton} onClick={goToLoginPage}>Login</button>
        </p>
      </div>
    </div>
  );
};

const styles = {
  signupContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f8f9fa",
    animation: "fadeIn 1.5s ease-in-out",
  },
  formContainerSignup: {
    width: "40%",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    animation: "slideIn 1s ease-in-out",
  },
  formTitle: {
    fontSize: "24px",
    color: "#333",
    marginBottom: "20px",
    textAlign: "center",
  },
  inputField: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "2px solid #ddd",
    borderRadius: "8px",
    transition: "all 0.3s ease",
  },
  submitBtn: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#4b8e8d",
    color: "#fff",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  loginPrompt: {
    marginTop: "10px",
    textAlign: "center",
    color: "#555",
  },
  linkButton: {
    background: "none",
    border: "none",
    color: "#007bff",
    textDecoration: "underline",
    cursor: "pointer",
  },
};

const keyFrames = `
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const styleTag = document.createElement("style");
styleTag.innerHTML = keyFrames;
document.head.appendChild(styleTag);

export default HiringManagerSignup;
