import React from "react";
import "./Content.css";
import CardCarousal from "./cardCarousal";
import JobPosts from "./JobPosts";

function Content() {
  return (
    <div className="content">
        <CardCarousal />
        <JobPosts/>
    </div>
  );
}

export default Content;
