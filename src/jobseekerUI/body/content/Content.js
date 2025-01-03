import React from "react";
import "./Content.css";
import CardCarousal from "./cardCarousals/cardCarousal";
import JobPosts from "./jobPosts/JobPosts";

function Content() {
  return (
    <div className="content">
      <CardCarousal />
      <JobPosts />
    </div>
  );
}

export default Content;
