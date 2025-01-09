import React, { useEffect, useState, useMemo } from "react";
import { message, Modal } from "antd";
import axios from "axios";
import "./AppliedJobs.css";
import FooterComp from "../../../HiringManager/dashborad/footer";
import Header from "../Header";

const AppliedJobs = () => {
  const [jobSeekerLoginDetails, setJobSeekerLoginDetails] = useState([]);
  const [formData, setFormData] = useState([]);
  const [matchedData, setMatchedData] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const loginUrl =
          "https://jobseeker-application-default-rtdb.firebaseio.com/jobSeekerLoginDetails.json";
        const profileUrl =
          "https://jobseeker-application-default-rtdb.firebaseio.com/formData.json";
        const [loginResponse, profileResponse] = await Promise.all([
          axios.get(loginUrl),
          axios.get(profileUrl),
        ]);
        const loginData = Object.values(loginResponse.data || {});
        const profileData = Object.values(profileResponse.data || {});
        setJobSeekerLoginDetails(loginData);
        setFormData(profileData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const matched = jobSeekerLoginDetails
      .map((loginDetails) =>
        formData.find((form) => form.email === loginDetails.email)
      )
      .filter(Boolean);
    setMatchedData(matched);
  }, [jobSeekerLoginDetails, formData]);

  const handleDeleteJob = async (jobKey) => {
    try {
      const deleteUrl = `https://jobseeker-application-default-rtdb.firebaseio.com/formData/${jobKey}.json`;
      await axios.delete(deleteUrl);
      setFormData((prevData) => {
        const updatedData = prevData.filter((data) => data.key !== jobKey);
        return updatedData;
      });
      message.success("Job application withdrawn successfully!");
    } catch (error) {
      console.error("Error withdrawing job application:", error);
      message.error("Failed to withdraw the job application. Please try again.");
    }
  };

  const confirmDelete = (jobKey) => {
    Modal.confirm({
      title: "Are you sure you want to withdraw this job application?",
      content: "This action cannot be undone.",
      okText: "Yes, Withdraw",
      cancelText: "Cancel",
      onOk: () => handleDeleteJob(jobKey),
    });
  };

  return (
    <>
      <Header />
      <div className="job-container">
        {contextHolder}
        {formData.length > 0 ? (
          formData.map((job, key) => (
            <div key={key} className="job-card">
              <div className="job-header">
                <div>
                  <h3 className="company-name">{job.companyName} - Applied</h3>
                  <p className="job-location">{job.location}</p>
                </div>
              </div>
              <h2 className="job-title">{job.jobTitle}</h2>
              <p className="job-description"><strong>Skills:</strong> {job.Skills}</p>
              <p><strong>Full Name:</strong> {job.fullName}</p>
              <p><strong>Email:</strong> {job.email}</p>
              <p><strong>Resume:</strong> <a href={job.resumeUrl} target="_blank" rel="noopener noreferrer">View Resume</a></p>
              <p><strong>LinkedIn:</strong> <a href={job.LinkedInURL} target="_blank" rel="noopener noreferrer">Profile</a></p>
              <div className="job-tags">
                <span className="tag">Experience: {job.experience}</span>
                <span className="tag">Full Time</span>
                <span className="tag">{job.phoneNumber}</span>
              </div>
              <div className="job-actions">
                <button
                  style={{
                    color: "white",
                    backgroundColor: "red",
                    padding: "10px 16px",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "backgroundColor 0.3s, color 0.3s",
                  }}
                  onClick={() => confirmDelete(key)}
                >
                  Withdraw
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ color: "white", fontSize: "large" }}>
            No job applications found for the selected filter.
          </p>
        )}
      </div>
      <FooterComp />
    </>
  );
};

export default AppliedJobs;
