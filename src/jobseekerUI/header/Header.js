import React, { useState } from 'react';
import './Header.css';  // Importing the custom CSS for styling
import Logo from "../../images/Job portal.jpg"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userImage, setUserImage] = useState(null); // State to store the uploaded image

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserImage(e.target.result); // Set the image as a data URL
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="header-logo">
        <img
          src={Logo}  // Replace with your actual logo path
          alt="Job Portal Logo"
        />
      </div>

      {/* Centered Search Section */}
      <div className="header-search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search..."
        />
        <button className="search-button">Search</button>
      </div>

      {/* Profile Image */}
      <div className="header-profile">
        <img
          src={userImage || "https://via.placeholder.com/40"}  // Default profile image if not uploaded
          alt="User Avatar"
          className="profile-avatar"
          onClick={handleMenuToggle}
        />
        {menuOpen && (
          <div className="menu">
            {/* Upload Image */}
            <div className="menu-item">
              <label htmlFor="upload-image">
                Upload Image
                <input
                  id="upload-image"
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleImageUpload}
                />
              </label>
            </div>
            {/* Sign Out */}
            <div className="menu-item" onClick={() => console.log('Sign out clicked')}>
              Sign Out
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
