// import React from "react";
// import "./Blog.scss";

// const Blog = ({ imageSrc, iconSrc, bloodPressure, title, description }) => {
//   return (
//     <div className="blog-card">
//       <div className="blog-image-section">
//         <img src={"/images/blog/blog1.jpeg"} alt={title} className="blog-image" />

//         <div className="blog-blood-pressure">
//           <img src={"/images/blogIcon/blogIcon1.jpeg"} alt="Blood Pressure Icon" className="blog-icon" />

//           <span className="blog-pressure-text">
//             121/80 <span>mmHg</span>
//           </span>
//         </div>
//       </div>

//       <div className="blog-text-section">
//         <h3 className="blog-title">{"title"}</h3>
//         <p className="blog-description">{"description"}</p>
//       </div>
//     </div>
//   );
// };

// export default Blog;


import React from "react";
import "./Blog.scss";

const Blog = ({ imageSrc, iconSrc, bloodPressure, title, description }) => {
  return (
    <div className="blog-card">
      {/* Image Section */}
      <div className="blog-image-section">
        <img src={imageSrc} alt={title} className="blog-image" />
        <div className="blog-blood-pressure">
          {/* Icon */}
          <img src={iconSrc} alt="Blood Pressure Icon" className="blog-icon" />
          {/* Blood Pressure */}
          <span className="blog-pressure-text">
            121/80 <span>mmHg</span>
          </span>
        </div>
      </div>

      {/* Text Section */}
      <div className="blog-text-section">
        <h3 className="blog-title">{title}</h3>
        <p className="blog-description">{description}</p>
      </div>
    </div>
  );
};

export default Blog;
