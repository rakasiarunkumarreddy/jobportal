import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";

const JobSeekerGuestLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Replace this with your actual database check
    const mockDatabase = {
      email: "jobseekerguest@gmail.com",
      password: "Guest@123"
    };

    if (email === mockDatabase.email && password === mockDatabase.password) {
      navigate("/job-seeker/ui");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
        gap: 2,
        padding: "20px",
        background: "linear-gradient(90deg, rgb(2, 73, 108), rgb(9, 33, 69))",
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ color: "#ffffff" }}>
        Job Seeker Login
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" onClick={handleLogin}>
        Login
      </Button>
      <Typography sx={{ color: "#ffffff", marginTop: 2 }}>
        Default Email: jobseekerguest@gmail.com
      </Typography>
      <Typography sx={{ color: "#ffffff" }}>
        Default Password: Guest@123
      </Typography>
    </Box>
  );
};

export default JobSeekerGuestLogin;
