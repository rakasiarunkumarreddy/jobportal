// Guest.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const Guest = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
        background: "linear-gradient(90deg, rgb(2, 73, 108), rgb(9, 33, 69))",
        backgroundSize: "200% 200%",
        animation: "gradientBG 10s ease infinite",
        padding: "20px",
      }}
    >
      <Typography variant="h3" gutterBottom sx={{ color: "#ffffff" }}>
        Choose Your Role
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/guest/job-seeker")}
          sx={{
            padding: 2,
            width: "200px",
            backgroundColor: "rgba(25, 118, 210, 0.8)",
            "&:hover": {
              backgroundColor: "#ffffff",
              color: "#1976d2",
            },
          }}
        >
          Job Seeker
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => navigate("/guest/hiring-manager")}
          sx={{
            padding: 2,
            width: "200px",
            backgroundColor: "rgba(25, 118, 210, 0.8)",
            "&:hover": {
              backgroundColor: "#ffffff",
              color: "#1976d2",
            },
          }}
        >
          Hiring Manager
        </Button>
      </Box>

      <style>
        {`
          @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </Box>
  );
};

export default Guest;
