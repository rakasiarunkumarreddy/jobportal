import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  IconButton,
} from "@mui/material";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import NavbarComp from "../dashborad/navbar";
import FooterComp from "../dashborad/footer";
import "./applicants.css";

const ApplicantsComp = () => {
  const [applicantsProfile, setApplicantsProfile] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const applicantUrl =
          "https://jobseeker-application-default-rtdb.firebaseio.com/formData.json";
        const response = await axios.get(applicantUrl);

        console.log("Fetched Applicants Data:", response.data);

        setApplicantsProfile(Object.values(response.data || {}));
        const userProfile = JSON.parse(localStorage.getItem("userProfile"));
        console.log("User Profile:", userProfile);
        if (userProfile && userProfile.name) {
          setUserName(userProfile.name);
          console.log("User Name:", userProfile.name);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch job data. Please try again later.");
      }
    };
    fetchingData();
  }, []);

  const updateStatus = async (applicantId, status) => {
    try {
      const url = `https://jobseeker-application-default-rtdb.firebaseio.com/formData/${applicantId}.json`;
      const response = await axios.patch(url, { status });
      console.log("Status updated successfully:", response.data);

      // Update the UI
      setApplicantsProfile((prev) =>
        prev.map((applicant) =>
          applicant.id === applicantId ? { ...applicant, status } : applicant
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const sendEmail = (email) => {
    console.log(`Email sent to: ${email}`);
  };

  const filteredApplicants = applicantsProfile.filter(
    (applicant) => applicant.postedBy && applicant.postedBy.toLowerCase() === userName.toLowerCase()
  );

  console.log("Filtered Applicants:", filteredApplicants);

  return (
    <div style={{ backgroundColor: "rgb(2, 73, 108)", width: "100%" }}>
      <NavbarComp />
      <div className="box-container">
        {filteredApplicants.map((applicant) => (
          <Card key={applicant.id} sx={{ marginBottom: "20px", borderRadius: "8px" }}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                {applicant.jobTitle}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {applicant.companyName}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Email: {applicant.email}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Phone: {applicant.phoneNumber}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Status: <strong style={{ color: `${applicant.status === "Accepted" ? "green" : "red"}` }}>{applicant.status || "Pending"}</strong>
              </Typography>
              <Box>
                <Button variant="contained" color="primary">
                  <a
                    href={applicant.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    View Resume
                  </a>
                </Button>
                <Button
                  variant="contained"
                  color="info"
                  sx={{ margin: "10px" }}
                  startIcon={<FaLinkedin />}
                >
                  <a
                    href={applicant.LinkedInURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "white"}}
                  >
                    LinkedIn
                  </a>
                </Button>
              </Box>
              <Box
                sx={{
                  marginTop: "10px",
                  display: "flex",
                  gap: "10px",
                }}
              >
                <Button
                  variant="contained"
                  color="success"
                  onClick={() =>
                    updateStatus(applicant.id, "Accepted")
                  }
                >
                  Accept
                </Button>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() =>
                    updateStatus(applicant.id, "Rejected")
                  }
                  disabled={applicant.status === "Accepted"}
                  sx={{
                    display:
                      applicant.status === "Accepted"
                        ? "none"
                        : "inline-block",
                  }}
                >
                  Reject
                </Button>
                <IconButton
                  color="primary"
                  onClick={() => sendEmail(applicant.email)}
                >
                  <FaEnvelope />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        ))}
      </div>
      <FooterComp />
    </div>
  );
};

export default ApplicantsComp;
