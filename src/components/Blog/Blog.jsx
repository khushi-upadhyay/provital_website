// import React from "react";
// import "./Blog.scss";

// const Blog = () => {
//   return (
//     <div className="blog-container">
//       <div className="blog-image-section">
//         <img
//           src="path-to-image" // Replace with the actual image path
//           alt="Nutrition"
//           className="blog-image"
//         />
//         <div className="blog-blood-pressure">
//           <span className="blog-heart-icon">❤️</span> 121/80 mmHg
//         </div>
//       </div>
//       <div className="blog-content">
//         <h3 className="blog-title">Nutrition</h3>
//         <p className="blog-description">
//           Evidence supports the use of a whole food, plant-predominant diet to
//           prevent, treat and reverse chronic illness.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Blog;
import React from "react";
import "./Blog.scss";

const Blog = ({ imageSrc, bloodPressure, title, description }) => {
  return (
    <div className="blog-card">
      {/* Image Section */}
      <div className="blog-image-section">
        <img src={imageSrc} alt={title} className="blog-image" />
        <div className="blog-blood-pressure">
          <span className="blog-heart-icon">❤️</span> {bloodPressure}
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
