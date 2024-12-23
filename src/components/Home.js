// src/components/Home.js
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div style={homeStyle}>
        <div style={textStyle}>
          <h2 style={headingStyle}>Welcome to the Job Portal</h2>
          <p style={paragraphStyle}>Choose your role to proceed:</p>
        </div>
        <div style={buttonContainerStyle}>
          <button
            style={buttonStyle}
            onClick={() => navigate("/hiring-manager/signup")}
          >
            Hiring Manager
          </button>
          <button
            style={buttonStyle}
            onClick={() => navigate("/job-seeker/signup")}
          >
            Job Seeker
          </button>
        </div>
      </div>
    </div>
  );
};

// Styles
const homeStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "40px",
  backgroundColor: "pink", // Light background for better contrast
  minHeight: "70vh",
  textAlign: "center",
  gap:"20%",
  marginTop:"50px",
  margin: "30px 200px 0 200px",
  fontFamily:"Times New Roman",
  borderRadius:"40px",
  backgroundImage: "url('https://tinyurl.com/4un6w44j')", 
  backgroundSize: "cover", 
  backgroundRepeat: "no-repeat", 
  backgroundPosition:"center",
  color:"#800000",



};

const textStyle = {
  marginBottom: "30px",
};

const headingStyle = {
  fontSize: "2.5rem", // Larger font size for the heading
  color: "maroon", // Dark gray for a professional look
  fontWeight: "bold",
  marginBottom: "10px",
};

const paragraphStyle = {
  fontSize: "1.2rem",
  color: "#6c757d", // Subtle gray for less emphasis
};

const buttonContainerStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  width: "200px", // Center-align buttons and ensure consistent width
};

const buttonStyle = {
  padding: "10px 20px",
  fontSize: "1.1rem",
  fontWeight: "bold",
  color: "black",
  backgroundColor: "pink", // Blue theme for buttons
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  transition: "background-color 0.3s ease",
  fontFamily:"Times New Roman"
};

buttonStyle["&:hover"] = {
  backgroundColor: "#0056b3", // Darker blue on hover
};

export default Home;
