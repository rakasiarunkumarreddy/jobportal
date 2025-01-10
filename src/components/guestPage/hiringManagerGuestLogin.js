import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography, Paper, Link } from "@mui/material";
import axios from "axios";
import "./hiringManagerGuest.css"; // Import the CSS file

const HiringManagerGuestLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Fetch hiring partner data from Firebase Realtime Database
      const response = await axios.get("https://jobseeker-application-default-rtdb.firebaseio.com/hiringpartner.json");
      const hiringPartners = response.data;

      // Compare credentials
      let validCredentials = false;
      for (const key in hiringPartners) {
        if (hiringPartners.hasOwnProperty(key)) {
          const hiringPartner = hiringPartners[key];
          if (email === hiringPartner.email && password === hiringPartner.password) {
            validCredentials = true;
            break;
          }
        }
      }

      if (validCredentials) {
        navigate("/hiring-manager/ui");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Error fetching hiring partner data:", error);
      alert("Error fetching hiring partner data. Please try again later.");
    }
  };

  return (
    <Box className="login-container">
      <Paper className="login-card" elevation={10}>
        <Typography variant="h4" gutterBottom>
          Hiring Manager Login
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
          Default Email: <Link href="#">hiringguest@gmail.com</Link>
        </Typography>
        <Typography>
          Default Password: Guest@123
        </Typography>
      </Paper>
    </Box>
  );
};

export default HiringManagerGuestLogin;
