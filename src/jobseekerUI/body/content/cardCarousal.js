import React from 'react';

const CardCarousal = () => {
  const cardCarousal = {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    border: "0px solid pink",
    borderRadius: "20px",
    padding: "10px",
    overflowX: "auto", // Horizontal scrolling
    width: "100%", // Adjusted width to prevent overflow
    maxWidth: "1050px", // Optional: max width to limit on large screens
    margin: "auto", // Center the carousel
    scrollbarWidth: "thin", // Firefox: makes the scrollbar thin
  };

  const cards = {
    border: "1px solid blue",
    padding: "0", // Remove padding to ensure image takes full space
    borderRadius: "20px",
    margin: "0", // No margin inside each card
    minWidth: "300px", // Minimum width of each card
    height: "200px", // Set height for the card
    position: "relative", // For absolute positioning of the image
    overflow: "hidden", // Hide overflow to keep the image inside the card
    transition: "transform 0.3s ease", // Smooth scaling effect on hover
  };

  const cardImage = {
    width: "100%", // Make the image take the full width of the card
    height: "100%", // Make the image take the full height of the card
    objectFit: "cover", // Ensure the image covers the card while maintaining aspect ratio
    objectPosition: "center", // Center the image
    transition: "transform 0.3s ease", // Smooth zoom effect on hover
  };

  // Add hover effect to zoom the image
  const handleHover = (e) => {
    e.target.style.transform = "scale(1.1)";
  };

  const handleLeave = (e) => {
    e.target.style.transform = "scale(1)";
  };

  return (
    <div>
      <h1>Trending Courses</h1>
      <div style={cardCarousal}>
        <div
          style={cards}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <a href="https://www.google.com">
            <img
              style={cardImage}
              src="https://tinyurl.com/4raea8cp"
              alt="Course"
            />
          </a>
        </div>
        <div
          style={cards}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <a href="https://www.google.com">
            <img
              style={cardImage}
              src="https://imgs.search.brave.com/NH2GoYijvGIi2JCzx-6C3bSXisuY_XtHiSCKuU1wRgU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDEwMTY3/MDYwLmpwZw"
              alt="Course"
            />
          </a>
        </div>
        <div
          style={cards}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <a href="https://www.google.com">
            <img
              style={cardImage}
              src="https://tinyurl.com/5d2jkmzm"
              alt="Course"
            />
          </a>
        </div>
        <div
          style={cards}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <a href="https://www.google.com">
            <img
              style={cardImage}
              src="https://tinyurl.com/4f99pan7"
              alt="Course"
            />
          </a>
        </div>
        <div
          style={cards}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <a href="https://www.google.com">
            <img
              style={cardImage}
              src="https://tinyurl.com/u6h5395d"
              alt="Course"
            />
          </a>
        </div>
        <div
          style={cards}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <a href="https://www.google.com">
            <img
              style={cardImage}
              src="https://tinyurl.com/d8vzpeax"
              alt="Course"
            />
          </a>
        </div>
      </div>

      {/* Define the animation for horizontal scrolling */}
      <style>
        {`
          

          .cardCarousal {
            display: flex;
            flex-direction: row;
            gap: 10px;
            border: 1px solid pink;
            border-radius: 20px;
            padding: 10px;
            overflow-x: auto;
            width: 100%;
            max-width: 1050px;
            margin: auto;
            scrollbar-width: thin;
            animation: scrollAnimation 10s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default CardCarousal;
