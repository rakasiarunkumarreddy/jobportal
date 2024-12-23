import React, { useState } from 'react';
import './Header.css';
import Logo from "../../images/Job portal.jpg"


const Header = () => {
  const [showDetails, setShowDetails] = useState(false);

  const handleImageClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src={Logo} alt="Logo" className="logo-img" />
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-button">Search</button>
      </div>

      {/* User Info */}
      <div className="nav-buttons">
        <img 
          src="user.png" 
          alt="User" 
          className="user-img" 
          onClick={handleImageClick} 
        />
      </div>

      {/* User Details */}
      {showDetails && (
        <div className="user-details">
          <div className="details">
            <p className="name">John Doe</p>
            <p className="email">john.doe@example.com</p>
          </div>
          <button className="signout-button" onClick={() => alert('Signed Out')}>
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
