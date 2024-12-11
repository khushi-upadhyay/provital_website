import React from "react";
import "./Blog.scss";

const Blog = ({ imageSrc, iconSrc, bloodPressure, title, description }) => {
  return (
    <div className="blog-card">
    
      <div className="blog-image-section">
        <img src={imageSrc} alt={title} className="blog-image" />
        <div className="blog-blood-pressure">
          <img src={iconSrc} alt="Blood Pressure Icon" className="blog-icon" />
          <span className="blog-pressure-text">
            {bloodPressure} <span></span>
          </span>
        </div>
      </div>
 
      <div className="blog-text-section">
        <h3 className="blog-title">{title}</h3>
        <p className="blog-description">{description}</p>
      </div>
    </div>
  );
};

export default Blog;
