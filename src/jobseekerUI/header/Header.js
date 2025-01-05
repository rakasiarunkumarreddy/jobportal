import React, { useState } from "react";
import "./Header.css"; // Importing the custom CSS for styling
import Logo from "../../images/JOB.png";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  return (
    <header className="header" style={{ backgroundColor: "rgb(41, 132, 222)" }}>
      {/* Logo */}
      <div className="header-logo">
        <img
          src={Logo} // Replace with your actual logo path
          alt="Job Portal Logo"
        />
      </div>

      <div className="title" style={{ color: "white" }}>
        <h2 style={{ fontSize: "20px" }}>JOB PORTAL</h2>
      </div>

      {/* Profile Image */}
      <div className="header-profile">
        <img
          src={userImage || "https://tinyurl.com/2dnywp4w"} // Default profile image if not uploaded
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
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                />
              </label>
            </div>
            {/* Sign Out */}
            <div
              className="menu-item"
              onClick={() => {
                navigate("/job-seeker/login");
              }}
            >
              Sign Out
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
