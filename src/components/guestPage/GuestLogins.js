import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const GuestLogins = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "linear-gradient(90deg, rgb(2, 73, 108), rgb(9, 33, 69))",
        color: "#ffffff",
        padding: 4,
      }}
    >
      <Typography variant="h3" gutterBottom>
        Guest Login
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "300px",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/job-seeker/login", { state: { guest: true } })}
        >
          Job Seeker Login
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/hiring-manager/login", { state: { guest: true } })}
        >
          Hiring Manager Login
        </Button>
      </Box>
    </Box>
  );
};

export default GuestLogins;
