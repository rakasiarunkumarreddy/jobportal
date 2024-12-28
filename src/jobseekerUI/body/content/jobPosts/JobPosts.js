// src/jobseekerUI/body/content/JobPosts.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db2, ref, get } from '../../../../firebase';
import './jobPosts.css';

const JobPosts = () => {
  const [jobSeekers, setJobSeekers] = useState([]);

  useEffect(() => {
    const fetchJobSeekers = async () => {
      const jobSeekersRef = ref(db2, 'jobpostingData');
      const snapshot = await get(jobSeekersRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        const seekers = Object.keys(data).map((key) => ({
          ...data[key],
          id: key,
        }));
        setJobSeekers(seekers);
        console.log(seekers);
      } else {
        console.log('No data available');
      }
    };

    fetchJobSeekers();
  }, []);

  return (
    <div>
      <h1>Job Seekers</h1>
      <div className="posts">
        {jobSeekers.length === 0 ? (
          <p>No job seekers found</p>
        ) : (
          jobSeekers.map((seeker) => (
            <div className="jobPosts" key={seeker.id}>
              <h4>Company: {seeker.companyName}</h4>
              <h2>Job Title: {seeker.jobTitle}</h2>
              <div>
                <p>Location: {seeker.location}</p>
                <p>Date: {seeker.postDate}</p>
              </div>
              <p>Skills: {seeker.skills}</p>
              <Link to={`/job-seeker/ui/job-description/${seeker.id}`}>
                <button>Apply</button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default JobPosts;