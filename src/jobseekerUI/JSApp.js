// src/App.js (JSApp.js)
import React, { useState } from 'react';
import Header from './header/Header';
import Body from './body/body';
import './JSApp.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');  // State to hold search term

  // Function to update the search term
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="app-container">
      <Header onSearch={handleSearch} />  {/* Pass handleSearch function to Header */}
      <Body searchTerm={searchTerm} />    {/* Pass searchTerm down to Body */}
    </div>
  );
};

export default App;
