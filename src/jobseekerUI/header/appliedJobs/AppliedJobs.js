import React, { useEffect, useState } from 'react';
import { db1, ref, get } from '../../../firebase';
import './AppliedJobs.css';

const AppliedJobs = () => {
  const [jobSeekerLoginDetails, setJobSeekerLoginDetails] = useState({});
  const [formData, setFormData] = useState({});
  const [matchedData, setMatchedData] = useState([]);

  useEffect(() => {
    const fetchJobSeekerLoginDetails = async () => {
      const snapshot = await get(ref(db1, 'jobSeekerLoginDetails'));
      if (snapshot.exists()) {
        setJobSeekerLoginDetails(snapshot.val());
      }
    };

    const fetchFormData = async () => {
      const snapshot = await get(ref(db1, 'formData'));
      if (snapshot.exists()) {
        setFormData(snapshot.val());
      }
    };

    fetchJobSeekerLoginDetails();
    fetchFormData();
  }, []);

  useEffect(() => {
    const matched = [];

    Object.values(jobSeekerLoginDetails).forEach(loginDetails => {
      Object.values(formData).forEach(form => {
        if (form.email === loginDetails.email) {
          matched.push(form);
        }
      });
    });

    setMatchedData(matched);
  }, [jobSeekerLoginDetails, formData]);

  return (
    <div className="applied-jobs">
      {matchedData.length > 0 ? (
        matchedData.map((data, index) => (
          <div key={index} className="job-card">
            <h2>{data.fullName}</h2>
            <p><strong>Job Title:</strong> {data.jobTitle}</p>
            <p><strong>Company:</strong> {data.companyName}</p>
            <p><strong>Skills:</strong> {data.skills.join(', ')}</p>
            <p><strong>Experience:</strong> {data.experience} years</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Phone:</strong> {data.phoneNumber}</p>
            <p><strong>Posted By:</strong> {data.postedBy}</p>
            <a href={data.linkedInURL}>LinkedIn Profile</a>
            <a href={data.resumeUrl}>Resume</a>
          </div>
        ))
      ) : (
        <p>No matching job applications found.</p>
      )}
    </div>
  );
};

export default AppliedJobs;
