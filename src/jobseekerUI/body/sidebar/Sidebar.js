import React from 'react';
import './Sidebar.css'; // Make sure to import the CSS file

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="filters">
        <div className="filter-section">
          <h3>Levels</h3>
          <label><input type="checkbox" /> Remote</label>
          <label><input type="checkbox" /> Hybrid</label>
          <label><input type="checkbox" /> Onsite</label>
        </div>

        <div className="filter-section">
          <h3>Salary Range</h3>
          <label><input type="checkbox" /> 1 LPA - 3 LPA</label>
          <label><input type="checkbox" /> 3 LPA - 6 LPA</label>
          <label><input type="checkbox" /> 6 LPA - 10 LPA</label>
          <label><input type="checkbox" /> 10+ LPA</label>
        </div>

        <div className="filter-section">
          <h3>Role</h3>
          <label><input type="checkbox" /> Frontend Developer</label>
          <label><input type="checkbox" /> Backend Developer</label>
          <label><input type="checkbox" /> Full Stack Developer</label>
          <label><input type="checkbox" /> DevOps Engineer</label>
        </div>

        <div className="filter-section">
          <h3>Places</h3>
          <label><input type="checkbox" /> Hyderabad</label>
          <label><input type="checkbox" /> Bangalore</label>
          <label><input type="checkbox" /> Mumbai</label>
          <label><input type="checkbox" /> Delhi</label>
          <label><input type="checkbox" /> Chennai</label>
        </div>
      </div>

      <div className="apply-filters">
        <button>Apply Filters</button>
      </div>
    </div>
  );
};

export default Sidebar;
