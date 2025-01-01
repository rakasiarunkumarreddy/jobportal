// src/body/body.js
import React from 'react';
import './Body.css';
// import Sidebar from './sidebar/Sidebar';
import Content from './content/Content';

const Body = ({ searchTerm }) => {
  return (
    <div className="body-container">
      {/* <Sidebar /> */}
      <Content searchTerm={searchTerm} /> {/* Pass searchTerm to Content */}
    </div>
  );
};

export default Body;
