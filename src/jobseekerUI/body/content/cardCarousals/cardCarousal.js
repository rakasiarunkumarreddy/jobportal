import React from 'react';
import "./cardCarousal.css";

const CardCarousal = () => {
  return (
    <div>
      <h1 style={{fontSize:"20px"}}>Trending Courses</h1>
      <div className="cardCarousal">
        <div className="card">
          <a href="https://youtu.be/Vi9bxu-M-ag?si=mVIqi_Piyc5aGRMb">
            <img
              src="https://tinyurl.com/4raea8cp"
              alt="Course"
            />
          </a>
        </div>
        <div className="card">
          <a href="https://youtu.be/l1EssrLxt7E?si=HfLMolrq92zsiL7B">
            <img
              src="https://tinyurl.com/349vpkkx"
              alt="Course"
            />
          </a>
        </div>
        <div className="card">
          <a href="https://youtu.be/9He4UBLyk8Y?si=Lv8ZPjUdlUdKRzNw">
            <img
              src="https://tinyurl.com/5d2jkmzm"
              alt="Course"
            />
          </a>
        </div>
        <div className="card">
          <a href="https://youtu.be/VaSjiJMrq24?si=RUYKZkEmBL1J_yHl">
            <img
              src="https://tinyurl.com/4f99pan7"
              alt="Course"
            />
          </a>
        </div>
        <div className="card">
          <a href="https://youtu.be/7wnove7K-ZQ?si=KEfsqaP3lcBPrW0v">
            <img
              src="https://tinyurl.com/u6h5395d"
              alt="Course"
            />
          </a>
        </div>
        <div className="card">
          <a href="https://youtu.be/hQcFE0RD0cQ?si=7BZ9dpxktwynsYrP">
            <img
              src="https://tinyurl.com/d8vzpeax"
              alt="Course"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardCarousal;