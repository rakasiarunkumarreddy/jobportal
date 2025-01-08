import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LandingPage from "../home/landingpage";
// import HiringPartnerSignup from "../hiringPartner/signup/hiringptnrsignup";
// import JobSeekerSignup from "../jobseeker/signupjobseeker";
import LoginPage from "../../components/HM_Credentials/HM_Login/HiringManagerLogin";
import HomePage from "../home/home";
// import JobSeekerLoginPage from "../jobseeker/jobseekerlogin";
import JobPostingForm from "../jobposting/jobposting";
import JobDetails from "../jobposting/jobdetails";
import SearchingComp from "../dashborad/search";
import ProfilePage from "../profile/profilecomp";
import PostedData from "../postedJob/postedjob";
import ApplicantsComp from "../applicants/applicants";
import { ContactUs } from "../contactpage/contact";
import { AboutUs } from "../contactpage/aboutus";
// import { LoginPersonDetailsProvider}  from "../hiringPartner/login/personData";

export default function StartRouting() {
  return (
    <>
      {/* <LoginPersonDetailsProvider> */}
        <BrowserRouter>
          <Routes>
            {/* Define routes */}
            {/* <Route path="/" element={<LandingPage />} /> */}
            {/* <Route
              path="/hiring-partner/signup"
              element={<HiringPartnerSignup />}
            /> */}
            {/* <Route path="/job-seeker/signup" element={<JobSeekerSignup />} /> */}
            <Route path="/hiringpartner/login" element={<LoginPage />} />
            {/* <Route path="/job-seeker/login" element={<JobSeekerLoginPage />} /> */}
            <Route path="/home" element={<HomePage />} />
            <Route path="/home/jobposting" element={<JobPostingForm />} />
            <Route
              path="/hiringpartner/home/jobdetails/:id"
              element={<JobDetails />}
            />
            <Route
              path="/hiringpartner/home/jobdetails/serach"
              element={<SearchingComp />}
            />
            <Route
              path="/hiringpartner/home/profile"
              element={<ProfilePage />}
            />
            <Route
              path="/hiringpartner/home/posteddata"
              element={<PostedData />}
            />
            <Route
              path="/hiringpartner/home/applicantsdata"
              element={<ApplicantsComp />}
            />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </BrowserRouter>
      {/* </LoginPersonDetailsProvider> */}
    </>
  );
}