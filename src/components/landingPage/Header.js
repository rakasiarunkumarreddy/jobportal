// src/components/Header.js
import React from "react";
import Logo from "../../images/JOB1.png"

const Header = () => (
  <header style={headerStyle}>
    <style>{keyframesStyles}</style> {/* Inject keyframes into the component */}
    <h1 style={{ ...headerText, animation: "moveText 3s linear infinite" }}>Job Seeker Application</h1>
    <img src={Logo} alt="Logo" style={{ marginRight: "10px",height:"70px",width:"100px",borderRadius:"50%" }} />
    
  </header>
);

const headerStyle = {
  display: "flex",
  alignItems: "center",
  padding: "10px",
  background: "black",
  justifyContent: "space-around",
  backgroundColor: "black",
  color: "white",
  fontFamily: "Times New Roman",
};

const headerText = {
  fontSize: "24px", 
  fontWeight: "bold",
  margin: "0", 
  color: "white", 
  textAlign: "center", 
  position: "relative", 
};

const keyframesStyles = `
  @keyframes moveText {
    0% {
      right: 20%;
    }
    50% {
      right: 50px;
    }
    100% {
      right: 0;
    }
  }
`;

export default Header;
