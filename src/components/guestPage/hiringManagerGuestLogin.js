import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";

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
        Hiring Manager Login
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
        Default Email: hiringguest@gmail.com
      </Typography>
      <Typography sx={{ color: "#ffffff" }}>
        Default Password: Guest@123
      </Typography>
    </Box>
  );
};

export default HiringManagerGuestLogin;
