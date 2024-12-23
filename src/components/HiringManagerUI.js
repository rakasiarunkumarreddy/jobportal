// src/components/HiringManagerUI.js
import React from "react";

const HiringManagerUI = () => {
  return (
    <div style={uiStyle}>
      <h2>Welcome, Hiring Manager!</h2>
      <p>This is your dashboard. Manage your job postings and candidates here.</p>
    </div>
  );
};

const uiStyle = {
  padding: "20px",
  textAlign: "center",
};

export default HiringManagerUI;
