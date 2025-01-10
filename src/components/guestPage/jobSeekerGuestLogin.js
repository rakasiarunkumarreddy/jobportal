import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography, Paper, Link } from "@mui/material";
import "./jobSeekerGuest.css"; // Import the CSS file

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
    <Box className="login-container">
      <Paper className="login-card" elevation={10}>
        <Typography variant="h4" gutterBottom>
          Job Seeker Login
        </Typography>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          fullWidth
          onClick={handleLogin}
          sx={{ marginTop: 2 }}
        >
          Login
        </Button>
        <Typography sx={{ marginTop: 2 }}>
          Default Email: <Link href="#">jobseekerguest@gmail.com</Link>
        </Typography>
        <Typography>
          Default Password: Guest@123
        </Typography>
      </Paper>
    </Box>
  );
};

export default JobSeekerGuestLogin;
