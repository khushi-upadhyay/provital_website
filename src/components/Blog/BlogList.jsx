// import React from "react";
// import Blog from "./Blog";

// const BlogList = ({ selectedTab }) => {
//   const blogData = [
//     {
//       imageSrc: "/images/blog/blog1.png",
//       iconSrc: "/images/blogIcon/blogIcon1.png",
//       bloodPressure: "121/80 mmHg",
//       title: "Nutrition",
//       description: "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
//     },
//     {
//       imageSrc: "/images/blog/blog2.png",
//       iconSrc: "/images/blogIcon/blogIcon2.png",
//       bloodPressure: "32 minutes",
//       title: "Physical activity",
//       description: "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
//     },
//     {
//       imageSrc: "/images/blog/blog3.png",
//       iconSrc: "/images/blogIcon/blogIcon3.png",
//       bloodPressure: "8 hours",
//       title: "Restorative sleep",
//       description: "Consistent, quality sleep is essential for cognitive function and physical health.",
//     },
//     {
//       imageSrc: "/images/blog/blog4.png",
//       iconSrc: "/images/blogIcon/blogIcon4.png",
//       bloodPressure: "60 bpm",
//       title: "Stress management",
//       description: "Effective stress management techniques are crucial for mental well-being and overall health.",
//     },
//     {
//       imageSrc: "/images/blog/blog5.png",
//       iconSrc: "/images/blogIcon/blogIcon5.png",
//       bloodPressure: "Feeling better",
//       title: "Social connection",
//       description: "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.",
//     },
//     {
//       imageSrc: "/images/blog/blog6.png",
//       iconSrc: "/images/blogIcon/blogIcon6.png",
//       bloodPressure: "62 days",
//       title: "Substance abuse",
//       description: "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.",
//     },
//   ];

//   const rearrangedBlogs =
//     selectedTab && selectedTab !== "All"
//       ? [
//           ...blogData.filter((blog) => blog.title === selectedTab),
//           ...blogData.filter((blog) => blog.title !== selectedTab),
//         ]
//       : blogData;

//   return (
//     <div className="blog-list-container">
//       <div className="blog-list">
//         {rearrangedBlogs.map((blog, index) => (
//           <Blog
//             key={index}
//             imageSrc={blog.imageSrc}
//             iconSrc={blog.iconSrc}
//             bloodPressure={blog.bloodPressure}
//             title={blog.title}
//             description={blog.description}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogList;

import React from "react";
import Blog from "./Blog";

const BlogList = ({ selectedTab }) => {
  const blogData = [
    {
      imageSrc: "/images/blog/blog1.png",
      iconSrc: "/images/blogIcon/blogIcon1.png",
      bloodPressure: "121/80 mmHg",
      title: "Nutrition",
      description: "Evidence supports the use of a whole food, plant-predominant diet to prevent, treat and reverse chronic illness.",
    },
    {
      imageSrc: "/images/blog/blog2.png",
      iconSrc: "/images/blogIcon/blogIcon2.png",
      bloodPressure: "32 minutes",
      title: "Physical activity",
      description: "Regular physical activity is key to managing weight, improving mental health, and reducing risk of chronic disease.",
    },
    {
      imageSrc: "/images/blog/blog3.png",
      iconSrc: "/images/blogIcon/blogIcon3.png",
      bloodPressure: "8 hours",
      title: "Restorative sleep",
      description: "Consistent, quality sleep is essential for cognitive function and physical health.",
    },
    {
      imageSrc: "/images/blog/blog4.png",
      iconSrc: "/images/blogIcon/blogIcon4.png",
      bloodPressure: "60 bpm",
      title: "Stress management",
      description: "Effective stress management techniques are crucial for mental well-being and overall health.",
    },
    {
      imageSrc: "/images/blog/blog5.png",
      iconSrc: "/images/blogIcon/blogIcon5.png",
      bloodPressure: "Feeling better",
      title: "Social connection",
      description: "Strong social connections are associated with a lower risk of many chronic diseases and enhanced mental health.",
    },
    {
      imageSrc: "/images/blog/blog6.png",
      iconSrc: "/images/blogIcon/blogIcon6.png",
      bloodPressure: "62 days",
      title: "Substance abuse",
      description: "Avoiding tobacco, limiting alcohol use, and abstaining from harmful substances are vital for long-term health.",
    },
  ];

  const rearrangedBlogs =
    selectedTab && selectedTab !== "All"
      ? [
          ...blogData.filter((blog) => blog.title === selectedTab),
          ...blogData.filter((blog) => blog.title !== selectedTab),
        ]
      : blogData;

  return (
    <div className="blog-list-container">
      <div className="blog-list">
        {rearrangedBlogs.map((blog, index) => (
          <Blog
            key={index}
            imageSrc={blog.imageSrc}
            iconSrc={blog.iconSrc}
            bloodPressure={blog.bloodPressure}
            title={blog.title}
            description={blog.description}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
