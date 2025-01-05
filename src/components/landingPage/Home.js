// // src/components/Home.js
// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "./Header";
// // import BackgroundImage from "../../images/backgroungimage.webp"

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div 
//   >
//       <Header />
//       <div style={homeStyle}>
//         <div style={textStyle}>
//           <h2 style={headingStyle}>Welcome to the Job Portal</h2>
//           <p style={paragraphStyle}>Choose your role to proceed:</p>
//         </div>
//         <div style={buttonContainerStyle}>
//           <button
//             style={buttonStyle}
//             onClick={() => navigate("/hiring-manager/signup")}
//           >
//             Hiring Manager
//           </button>
//           <button
//             style={buttonStyle}
//             onClick={() => navigate("/job-seeker/signup")}
//           >
//             Job Seeker
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Styles
// const homeStyle = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   padding: "40px",
//   minHeight: "70vh",
//   textAlign: "center",
//   gap:"20%",
//   marginTop:"50px",
//   margin: "30px 200px 0 200px",
//   fontFamily:"Times New Roman",
//   borderRadius:"40px",
//   backgroundSize: "cover", 
//   backgroundRepeat: "no-repeat", 
//   backgroundPosition:"center",
//   color:"#800000",
//   // backgroundImage: `url(${BackgroundImage})`, // Use BackgroundImage variable
  


// };
// const textStyle = {
//   marginBottom: "30px",
// };

// const headingStyle = {
//   fontSize: "2.5rem", // Larger font size for the heading
//   color: "maroon", // Dark gray for a professional look
//   fontWeight: "bold",
//   marginBottom: "10px",
// };

// const paragraphStyle = {
//   fontSize: "1.2rem",
//   color: "white", // Subtle gray for less emphasis
// };

// const buttonContainerStyle = {
//   display: "flex",
//   flexDirection: "column",
//   gap: "15px",
//   width: "200px", // Center-align buttons and ensure consistent width
// };

// const buttonStyle = {
//   padding: "10px 20px",
//   fontSize: "1.1rem",
//   fontWeight: "bold",
//   color: "black",
//   backgroundColor: "white", // Blue theme for buttons
//   border: "none",
//   borderRadius: "5px",
//   cursor: "pointer",
//   transition: "background-color 0.3s ease",
//   fontFamily:"Times New Roman"
// };

// buttonStyle["&:hover"] = {
//   backgroundColor: "pink", // Darker blue on hover
// };

// export default Home;








import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        animation: "gradientBG 10s ease infinite",
        background: "linear-gradient(90deg,rgb(2, 73, 108),rgb(9, 33, 69))",
        backgroundSize: "200% 200%",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        margin: "0px",
      }}
    >
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "rgb(41, 132, 222)" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, padding: "0px 40px" }}>
            <WorkIcon fontSize="large" />
            <Typography variant="h6">Job Portal</Typography>
          </Box>

          <Typography variant="h6" sx={{ padding: "0px 40px" }}>
            Find Your Dream Job!
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flex: 1,
          padding: "20px",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 2,
            animation: "scaleUp 3s infinite",
          }}
        >
          <WorkIcon
            sx={{
              fontSize: 80,
              color: "#ffffff",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          />
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              color: "#ffffff",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Welcome to Job Portal
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{
              color: "#ffffff",
              textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            Choose your role to proceed:
          </Typography>
        </Box>

        {/* Buttons Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/hiring-manager/signup")}
            sx={{
              flexDirection: "column",
              alignItems: "center",
              padding: 2,
              color: "#ffffff",
              width: "200px",
              backgroundColor: "rgba(25, 118, 210, 0.8)",
              "&:hover": {
                backgroundColor: "#ffffff",
                color: "#1976d2",
              },
            }}
          >
            <BusinessIcon fontSize="large" sx={{ marginBottom: 1 }} />
            Hiring Manager
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate("/job-seeker/signup")}
            sx={{
              flexDirection: "column",
              alignItems: "center",
              padding: 2,
              color: "#ffffff",
              width: "200px",
              backgroundColor: "rgba(25, 118, 210, 0.8)",
              "&:hover": {
                backgroundColor: "#ffffff",
                color: "#1976d2",
              },
            }}
          >
            <PersonIcon fontSize="large" sx={{ marginBottom: 1 }} />
            Job Seeker
          </Button>
        </Box>
      </Box>

      <style>
        {`
          @keyframes radialPulse {
            0% {
              background: radial-gradient(circle, #1976d2, #ffffff);
            }
            50% {
              background: radial-gradient(circle, #ffffff, #1976d2);
            }
            100% {
              background: radial-gradient(circle, #1976d2, #ffffff);
            }
          }

          @keyframes scaleUp {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }
        `}
      </style>
    </Box>
  );
};

export default Home;
