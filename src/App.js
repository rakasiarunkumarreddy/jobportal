import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import HiringManagerSignup from "./components/HiringManagerSignup";
import HiringManagerLogin from "./components/HiringManagerLogin";
import JobSeekerSignup from "./components/JobSeekerSignup";
import JobSeekerLogin from "./components/JobSeekerLogin";
import HiringManagerUI from "./components/HiringManagerUI";
import JobSeekerUI from "./components/JobSeekerUI";
import JobPosts from "./jobseekerUI/body/content/JobPosts";
import JobDescription from "./jobseekerUI/body/content/JobDescription";
import SubmitDetails from "./jobseekerUI/body/content/SubmitDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hiring-manager/signup" element={<HiringManagerSignup />} />
        <Route path="/hiring-manager/login" element={<HiringManagerLogin />} />
        <Route path="/hiring-manager/ui" element={<HiringManagerUI />} />
        <Route path="/job-seeker/signup" element={<JobSeekerSignup />} />
        <Route path="/job-seeker/login" element={<JobSeekerLogin />} />
        <Route path="/job-seeker/ui" element={<JobSeekerUI />} />
        <Route path="/job-seeker/ui/job-posts" element={<JobPosts />} />
        <Route path="/job-seeker/ui/job-description/:id" element={<JobDescription />} />
        <Route path="/submit-details" element={<SubmitDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
