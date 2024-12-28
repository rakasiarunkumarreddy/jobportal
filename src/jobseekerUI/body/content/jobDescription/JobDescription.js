import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db2, ref, get } from '../../../../firebase';
import './jobDescription.css';

const JobDescription = () => {
  const [jobDetails, setJobDetails] = useState(null);
  const { id: jobId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobDetails = async () => {
      const jobRef = ref(db2, `jobpostingData/${jobId}`);
      const snapshot = await get(jobRef);
      if (snapshot.exists()) {
        setJobDetails(snapshot.val());
      } else {
        console.log('No data available');
      }
    };

    fetchJobDetails();
  }, [jobId]);

  if (!jobDetails) {
    return <p>Loading job details...</p>;
  }

  return (
    <div className="jobDescription">
      <div className="header">
        <h1>{jobDetails.jobTitle}</h1>
        <button className="applyButton" onClick={() => navigate(`/submit-details`)}>Apply</button>
      </div>
      <p>Company: {jobDetails.companyName}</p>
      <p>Description: {jobDetails.jobDescription}</p>
      <p>JobType: {jobDetails.jobType}</p>
      <p>Location: {jobDetails.location}</p>
      <p>Date: {jobDetails.postDate}</p>
      <p>Skills: {jobDetails.skills}</p>
    </div>
  );
};

export default JobDescription;
