import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
import { db2, ref, get } from "../../../firebase"; // Import firebase config for db2
import "./HiringManagerLogin.css";
import Alert from "../../alert/Alert"; // Import the Alert component

const HiringManagerLogin = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

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
      const dbRef = ref(db2, "hiringpartner");
      const snapshot = await get(dbRef);
      const data = snapshot.val();

      const user = Object.values(data).find(
        (item) =>
          item.email === credentials.email &&
          item.password === credentials.password
      );

      if (user) {
        localStorage.setItem("userProfile", JSON.stringify(user));
        setAlertMessage("Login successful!");
        setShowAlert(true);
        setTimeout(() => {
          navigate("/hiring-manager/ui");
        }, 3000);
      } else {
        setAlertMessage("Invalid credentials!");
        setShowAlert(true);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setAlertMessage("Login failed! Please try again.");
      setShowAlert(true);
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
      {showAlert && (
        <Alert
          message={alertMessage}
          onClose={() => setShowAlert(false)}
        />
      )}
    </div>
  );
};

export default HiringManagerLogin;
