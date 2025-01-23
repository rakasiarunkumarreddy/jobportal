import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography, Paper, Link } from "@mui/material";
import Alert from "../alert/Alert"
import "./jobSeekerGuest.css"; // Import the CSS file

const JobSeekerGuestLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Replace this with your actual database check
    const mockDatabase = {
      email: "jobseekerguest@gmail.com",
      password: "Guest@123"
    };

    if (email === mockDatabase.email && password === mockDatabase.password) {
      const loginDetailsUrl =
        "https://jobseeker-application-default-rtdb.firebaseio.com/jobSeekerLoginDetails.json";
      try {
        const loginResponse = await axios.get(loginDetailsUrl);
        const loginDetails = loginResponse.data;

        if (loginDetails && Object.keys(loginDetails).length > 0) {
          const existingKey = Object.keys(loginDetails)[0];
          const updateUrl = `https://jobseeker-application-default-rtdb.firebaseio.com/jobSeekerLoginDetails/${existingKey}.json`;

          await axios.put(updateUrl, {
            email: email,
            password: password,
          });
        } else {
          await axios.post(loginDetailsUrl, {
            email: email,
            password: password,
          });
        }

        setShowAlert(true); // Show the alert
        setTimeout(() => {
          navigate("/job-seeker/ui");
        }, 500); // Navigate after the alert disappears
      } catch (err) {
        setError("Error logging in. Please try again.");
        console.error("Firebase submission error:", err);
      }
    } else {
      setError("Invalid credentials");
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
        {error && <Typography color="error">{error}</Typography>}
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
      {showAlert && (
        <Alert message="Login Successful" onClose={() => setShowAlert(false)} />
      )}
    </Box>
  );
};

export default JobSeekerGuestLogin;
