// src/components/Header.js
import React from "react";
import Logo from "../images/Job portal.jpg"

const Header = () => (
  <header style={headerStyle}>
    <style>{keyframesStyles}</style> {/* Inject keyframes into the component */}
    <h1 style={{ ...headerText, animation: "moveText 3s linear infinite" }}>Job Seeker Application</h1>
    <img src={Logo} alt="Logo" style={{ marginRight: "10px",height:"90px",width:"120px",borderRadius:"50%" }} />
    
  </header>
);

const headerStyle = {
  display: "flex",
  alignItems: "center",
  padding: "10px",
  background: "#f5f5f5",
  justifyContent: "space-around",
  backgroundColor: "black",
  color: "white",
  fontFamily: "Times New Roman",
};

const headerText = {
  fontSize: "24px", 
  fontWeight: "bold",
  margin: "0", 
  color: "pink", 
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
