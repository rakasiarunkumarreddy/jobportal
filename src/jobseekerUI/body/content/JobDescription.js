import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { db2, ref, get } from '../../../firebase';
import './jobDescription.css';

const JobDescription = () => {
  const { id } = useParams(); // Extract job ID from the URL
  const location = useLocation();
  const [job, setJob] = useState(location.state || null); // Get the job data passed through state

  useEffect(() => {
    // If job data is not passed through state, fetch it from the database
    if (!job) {
      const fetchJobDetails = async () => {
        const jobRef = ref(db2, `jobpostingData/${id}`);
        const snapshot = await get(jobRef);
        if (snapshot.exists()) {
          setJob({ ...snapshot.val(), id }); // Set the fetched job data
        } else {
          console.log('No data found for this job');
        }
      };

      fetchJobDetails();
    }
  }, [id, job]); // Dependency array ensures data is fetched if the job is not in state

  if (!job) {
    return <p>Loading job details...</p>;
  }

  return (
    <div className="job-description">
      <h1>Job Title: {job.jobTitle}</h1>
      <h4>Company: {job.companyName}</h4>
      <p>Location: {job.location}</p>
      <p>Date: {job.postDate}</p>
      <p>Skills: {job.skills}</p>
      <p>Description: {job.description}</p>
    </div>
  );
};

export default JobDescription;
