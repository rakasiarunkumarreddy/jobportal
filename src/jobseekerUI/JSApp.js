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
    <div className="app-container" style={{background:"linear-gradient(90deg, rgb(2, 73, 108), rgb(9, 33, 69));"}}>
      <Header onSearch={handleSearch} />  {/* Pass handleSearch function to Header */}
      <Body searchTerm={searchTerm} />    {/* Pass searchTerm down to Body */}
    </div>
  );
};

export default App;
