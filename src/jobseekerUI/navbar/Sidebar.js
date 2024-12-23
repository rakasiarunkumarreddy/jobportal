import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    level: [],
    salary: [],
    role: [],
    place: []
  });

  const handleCheckboxChange = (filterCategory, value) => {
    setSelectedFilters((prev) => {
      const updatedFilters = { ...prev };
      if (updatedFilters[filterCategory].includes(value)) {
        updatedFilters[filterCategory] = updatedFilters[filterCategory].filter(item => item !== value);
      } else {
        updatedFilters[filterCategory].push(value);
      }
      return updatedFilters;
    });
  };

  const handleApplyFilters = () => {
    console.log("Filters applied:", selectedFilters);
  };

  return (
    <div className="sidebar">
      {/* Levels Section */}
      <div className="filter-section">
        <h3>Levels</h3>
        <div>
          <label>
            <input
              type="checkbox"
              name="level"
              value="remote"
              checked={selectedFilters.level.includes("remote")}
              onChange={() => handleCheckboxChange("level", "remote")}
            />
            Remote
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="level"
              value="hybrid"
              checked={selectedFilters.level.includes("hybrid")}
              onChange={() => handleCheckboxChange("level", "hybrid")}
            />
            Hybrid
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="level"
              value="onsite"
              checked={selectedFilters.level.includes("onsite")}
              onChange={() => handleCheckboxChange("level", "onsite")}
            />
            Onsite
          </label>
        </div>
      </div>

      {/* Salary Range Section */}
      <div className="filter-section">
        <h3>Salary Range</h3>
        <div>
          <label>
            <input
              type="checkbox"
              name="salary"
              value="1-3 LPA"
              checked={selectedFilters.salary.includes("1-3 LPA")}
              onChange={() => handleCheckboxChange("salary", "1-3 LPA")}
            />
            1 LPA - 3 LPA
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="salary"
              value="3-6 LPA"
              checked={selectedFilters.salary.includes("3-6 LPA")}
              onChange={() => handleCheckboxChange("salary", "3-6 LPA")}
            />
            3 LPA - 6 LPA
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="salary"
              value="6-10 LPA"
              checked={selectedFilters.salary.includes("6-10 LPA")}
              onChange={() => handleCheckboxChange("salary", "6-10 LPA")}
            />
            6 LPA - 10 LPA
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="salary"
              value="10+ LPA"
              checked={selectedFilters.salary.includes("10+ LPA")}
              onChange={() => handleCheckboxChange("salary", "10+ LPA")}
            />
            10+ LPA
          </label>
        </div>
      </div>

      {/* Role Section */}
      <div className="filter-section">
        <h3>Role</h3>
        <div>
          <label>
            <input
              type="checkbox"
              name="role"
              value="frontend"
              checked={selectedFilters.role.includes("frontend")}
              onChange={() => handleCheckboxChange("role", "frontend")}
            />
            Frontend Developer
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="role"
              value="backend"
              checked={selectedFilters.role.includes("backend")}
              onChange={() => handleCheckboxChange("role", "backend")}
            />
            Backend Developer
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="role"
              value="fullstack"
              checked={selectedFilters.role.includes("fullstack")}
              onChange={() => handleCheckboxChange("role", "fullstack")}
            />
            Full Stack Developer
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="role"
              value="devops"
              checked={selectedFilters.role.includes("devops")}
              onChange={() => handleCheckboxChange("role", "devops")}
            />
            DevOps Engineer
          </label>
        </div>
      </div>

      {/* Places Section */}
      <div className="filter-section">
        <h3>Places</h3>
        <div>
          <label>
            <input
              type="checkbox"
              name="place"
              value="Hyderabad"
              checked={selectedFilters.place.includes("Hyderabad")}
              onChange={() => handleCheckboxChange("place", "Hyderabad")}
            />
            Hyderabad
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="place"
              value="Bangalore"
              checked={selectedFilters.place.includes("Bangalore")}
              onChange={() => handleCheckboxChange("place", "Bangalore")}
            />
            Bangalore
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="place"
              value="Mumbai"
              checked={selectedFilters.place.includes("Mumbai")}
              onChange={() => handleCheckboxChange("place", "Mumbai")}
            />
            Mumbai
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="place"
              value="Delhi"
              checked={selectedFilters.place.includes("Delhi")}
              onChange={() => handleCheckboxChange("place", "Delhi")}
            />
            Delhi
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="place"
              value="Chennai"
              checked={selectedFilters.place.includes("Chennai")}
              onChange={() => handleCheckboxChange("place", "Chennai")}
            />
            Chennai
          </label>
        </div>
      </div>

      {/* Apply Filters Button */}
      <div className="apply-filters">
        <button
          className="apply-filters-btn"
          onClick={handleApplyFilters}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
