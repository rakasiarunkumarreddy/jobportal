// src/jobseekerUI/body/content/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css'; // Make sure to import the CSS file

const Sidebar = ({ onApplyFilters, onRemoveFilters }) => {
  const [filters, setFilters] = useState({
    levels: [],
    salaryRange: [],
    role: [],
    places: [],
  });

  const handleCheckboxChange = (category, value) => {
    setFilters((prevFilters) => {
      const updatedCategory = prevFilters[category].includes(value)
        ? prevFilters[category].filter((item) => item !== value)
        : [...prevFilters[category], value];
      return { ...prevFilters, [category]: updatedCategory };
    });
  };

  const applyFilters = () => {
    if (typeof onApplyFilters === 'function') {
      onApplyFilters(filters);
    }
  };

  const removeFilters = () => {
    setFilters({ levels: [], salaryRange: [], role: [], places: [] });
    if (typeof onRemoveFilters === 'function') {
      onRemoveFilters();
    }
    // Clear all checkboxes
    const checkboxes = document.querySelectorAll('.sidebar input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  return (
    <div className="sidebar">
      <div className="filters">
        <div className="filter-section">
          <h3>Levels</h3>
          <label><input type="checkbox" onChange={() => handleCheckboxChange('levels', 'Remote')} /> Remote</label>
          <label><input type="checkbox" onChange={() => handleCheckboxChange('levels', 'Hybrid')} /> Hybrid</label>
          <label><input type="checkbox" onChange={() => handleCheckboxChange('levels', 'Onsite')} /> Onsite</label>
        </div>

        <div className="filter-section">
          <h3>Salary Range</h3>
          <label><input type="checkbox" onChange={() => handleCheckboxChange('salaryRange', '1 LPA - 3 LPA')} /> 1 LPA - 3 LPA</label>
          <label><input type="checkbox" onChange={() => handleCheckboxChange('salaryRange', '3 LPA - 6 LPA')} /> 3 LPA - 6 LPA</label>
          <label><input type="checkbox" onChange={() => handleCheckboxChange('salaryRange', '6 LPA - 10 LPA')} /> 6 LPA - 10 LPA</label>
          <label><input type="checkbox" onChange={() => handleCheckboxChange('salaryRange', '10+ LPA')} /> 10+ LPA</label>
        </div>

        <div className="filter-section">
          <h3>Role</h3>
          <label><input type="checkbox" onChange={() => handleCheckboxChange('role', 'Frontend Developer')} /> Frontend Developer</label>
          <label><input type="checkbox" onChange={() => handleCheckboxChange('role', 'Backend Developer')} /> Backend Developer</label>
          <label><input type="checkbox" onChange={() => handleCheckboxChange('role', 'Full Stack Developer')} /> Full Stack Developer</label>
          <label><input type="checkbox" onChange={() => handleCheckboxChange('role', 'DevOps Engineer')} /> DevOps Engineer</label>
        </div>

        <div className="filter-section">
          <h3>Places</h3>
          <label><input type="checkbox" onChange={() => handleCheckboxChange('places', 'Hyderabad')} /> Hyderabad</label>
          <label><input type="checkbox" onChange={() => handleCheckboxChange('places', 'Bangalore')} /> Bangalore</label>
          <label><input type="checkbox" onChange={() => handleCheckboxChange('places', 'Mumbai')} /> Mumbai</label>
          <label><input type="checkbox" onChange={() => handleCheckboxChange('places', 'Delhi')} /> Delhi</label>
          <label><input type="checkbox" onChange={() => handleCheckboxChange('places', 'Chennai')} /> Chennai</label>
        </div>
      </div>

      <div className="apply-filters">
        <button onClick={applyFilters}>Apply Filters</button>
        <button onClick={removeFilters}>Remove Filters</button>
      </div>
    </div>
  );
};

export default Sidebar;
