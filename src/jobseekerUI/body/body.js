import React from 'react';
import './Body.css';
import Sidebar from "./sidebar/Sidebar"
import Content from "./content/Content"

const Body = () => {
  return (
    <div className="body-container">
      <Sidebar />
      <Content />
    </div>
  );
};

export default Body;
