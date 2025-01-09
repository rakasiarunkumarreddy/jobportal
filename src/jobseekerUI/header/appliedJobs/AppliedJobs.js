import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { message, Modal } from "antd";
import axios from "axios";
import "./AppliedJobs.css";
import FooterComp from "../../../HiringManager/dashborad/footer";
import Header from "../Header"

const AppliedJobs = () => {
  const [jobSeekerLoginDetails, setJobSeekerLoginDetails] = useState([]);
  const [formData, setFormData] = useState([]);
  const [matchedData, setMatchedData] = useState([]);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

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
    const matched = jobSeekerLoginDetails.map(loginDetails =>
      formData.find(form => form.email === loginDetails.email)
    ).filter(Boolean);

    setMatchedData(matched);
  }, [jobSeekerLoginDetails, formData]);

  const handleJobDetails = (id) => {
    navigate(`/jobseeker/home/jobdetails/${id}`);
  };

  const handleDeleteJob = async (jobKey) => {
    try {
      const deleteUrl = `https://jobseeker-application-default-rtdb.firebaseio.com/formData/${jobKey}.json`;
      await axios.delete(deleteUrl);

      // Update the formData state after successful deletion
      setFormData((prevData) => {
        const updatedData = { ...prevData };
        delete updatedData[jobKey];
        return updatedData;
      });

      message.success("Job application deleted successfully!");
    } catch (error) {
      console.error("Error deleting job application:", error);
      message.error("Failed to delete the job application. Please try again.");
    }
  };

  const confirmDelete = (jobKey) => {
    Modal.confirm({
      title: "Are you sure you want to delete this job application?",
      content: "This action cannot be undone.",
      okText: "Yes, Delete",
      cancelText: "Cancel",
      onOk: () => handleDeleteJob(jobKey),
    });
  };

  const filteredJobs = useMemo(() => {
    if (!formData) return [];
    return Object.entries(formData).filter(([key, job]) =>
      matchedData.includes(job)
    );
  }, [formData, matchedData]);

  return (
    <>
    <Header/>
      <div className="job-container">
        {contextHolder}
        {filteredJobs.length > 0 ? (
          filteredJobs.map(([key, job]) => (
            <div key={key} className="job-card">
              <div className="job-header">
                <div>
                  <h3 className="company-name">{job.companyName}</h3>
                  <p className="job-location">{job.location}</p>
                </div>
              </div>
              <h2 className="job-title">{job.jobTitle}</h2>
              <p className="job-description">{job.description}</p>
              <div className="job-tags">
                <span className="tag">Post Date: {job.postDate} </span>
                <span className="tag">Full Time</span>
                <span className="tag">{job.salary} LPA</span>
              </div>
              <div className="job-actions">
                <button
                  className="details-btn"
                  onClick={() => handleJobDetails(key)}
                >
                  Details
                </button>
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
                  Delete Job
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
