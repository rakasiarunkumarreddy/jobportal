import React, { useState } from 'react';
import Sidebar from './sidebar/Sidebar';
import JobPosts from './content/jobPosts/JobPosts';



const ParentComponent = () => {
  const [filters, setFilters] = useState({
    levels: [],
    salaryRange: [],
    role: [],
    places: [],
  });

  const applyFilters = (filters) => {
    console.log('Setting filters:', filters); // Log filters for debugging
    setFilters(filters);
  };

  const removeFilters = () => {
    setFilters({
      levels: [],
      salaryRange: [],
      role: [],
      places: [],
    });
  };

  return (
    <div>
      <Sidebar onApplyFilters={applyFilters} onRemoveFilters={removeFilters} />
      <JobPosts filters={filters} />
    </div>
  );
};

export default ParentComponent;

