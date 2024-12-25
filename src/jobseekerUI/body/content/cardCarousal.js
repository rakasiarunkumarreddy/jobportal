// src/content/cardCarousal.js
import React from 'react';

const CardCarousal = () => {
  const cardCarousal = {
    display: "flex",
    flexDirection: "row", // Fixed property name
    gap: "10px",
    border: "2px solid black",
    borderRadius: "20px",
    padding: "10px", // Optional: Adds some padding inside the container
    overflowX: "auto", // Optional: Allows horizontal scrolling if items overflow
  };

  const cards = {
    border: "1px solid black",
    padding: "40px",
    borderRadius: "20px",
    margin: "10px",
    minWidth: "200px", // Optional: Ensures a minimum width for each card
  };

  return (
    <div>
      <h1>Trending Courses</h1>
      <div style={cardCarousal}>
        <div style={cards}>
          <h1>Full Stack Developer</h1>
          <a href="www.google.com">click here</a>
        </div>
        <div style={cards}>
          <h1>Full Stack Developer</h1>
          <a href="www.google.com">click here</a>
        </div>
        <div style={cards}>
          <h1>Full Stack Developer</h1>
          <a href="www.google.com">click here</a>
        </div>
        <div style={cards}>
          <h1>Full Stack Developer</h1>
          <a href="www.google.com">click here</a>
        </div>
        <div style={cards}>
          <h1>Full Stack Developer</h1>
          <a href="www.google.com">click here</a>
        </div>
      </div>
    </div>
  );
};

export default CardCarousal;
