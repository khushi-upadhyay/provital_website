// import React from "react";
// import Blog from "./Blog";

// const BlogList = () => {
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

//   return (
//     <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", justifyContent: "center" }}>
//       {blogData.map((blog, index) => (
//         <Blog
//           key={index}
//           imageSrc={blog.imageSrc}
//           iconSrc={blog.iconSrc}
//           bloodPressure={blog.bloodPressure}
//           title={blog.title}
//           description={blog.description}
//         />
//       ))}
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

  // Filter the blog list based on the selected tab
  const rearrangedBlogs =
    selectedTab && selectedTab !== "All"
      ? [
          ...blogData.filter((blog) => blog.title === selectedTab), // Selected blog
          ...blogData.filter((blog) => blog.title !== selectedTab), // Rest of the blogs
        ]
      : blogData;

  return (
    <div style={{ position: "relative", width: "100%" }}>
      {/* Horizontal Scroll Container */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "24px",
          scrollBehavior: "smooth",
          padding: "16px",
        }}
        className="blog-list"
      >
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
