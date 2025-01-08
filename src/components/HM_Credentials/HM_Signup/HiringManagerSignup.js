import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db2, ref, push, get, child } from "../../../firebase"; // Import firebase config for db2
import "./HiringManagerSignup.css";
import Alert from "../../alert/Alert"; // Import the Alert component

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

  const [emailExists, setEmailExists] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const navigate = useNavigate();

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^\d{10}$/;
    return re.test(String(phone));
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      alert("Invalid email format!");
      return;
    }
    if (!validatePhone(formData.phone)) {
      alert("Phone number should be 10 digits!");
      return;
    }
    if (!validatePassword(formData.password)) {
      alert("Password should be at least 8 characters long!");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const dbRef = ref(db2, "hiringpartner");
      const snapshot = await get(child(dbRef, "/"));
      const existingData = snapshot.val();

      // Check if email already exists
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
        setEmailExists(true);
        // Clear input fields
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          password: "",
          confirmPassword: "",
          role: "Hiring Manager",
        });
      } else {
        await push(dbRef, formData);
        setAlertMessage("Signup successful!");
        setShowAlert(true);
        setTimeout(() => {
          navigate("/hiring-manager/login");
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      setAlertMessage("Signup failed! Please try again.");
      setShowAlert(true);
    }
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
          <button className="linkButton" onClick={() => navigate("/hiring-manager/login")}>
            Login
          </button>
        </p>
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

export default HiringManagerSignup;
