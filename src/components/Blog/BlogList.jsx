
import React, { useRef } from "react";
import "./BlogList.scss";
import Blog from "./Blog";

const BlogList = ({ selectedTab, setSelectedTab }) => {
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

  const scrollRef = useRef();

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else if (direction === "right") {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const scrollToCategory = (category) => {
    const categoryElement = document.getElementById(category);
    if (categoryElement) {
      categoryElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="blog-list-container">
      {/* Category navigation with right-aligned arrows */}
      <div className="category-nav">
        {blogData.map((blog, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedTab(blog.title);
              scrollToCategory(blog.title);
            }}
            className={`category-title ${selectedTab === blog.title ? "active" : ""}`}
          >
            {blog.title}
          </button>
        ))}

        {/* Arrow buttons moved to the right */}
        <button
          onClick={() => handleScroll("left")}
          className="arrow-btn left"
        >
          &#8592;
        </button>
        <button
          onClick={() => handleScroll("right")}
          className="arrow-btn right"
        >
          &#8594;
        </button>
      </div>

      {/* Blog list with category-based smooth scrolling */}
      <div
        className="blog-list"
        ref={scrollRef}
      >
        {blogData.map((blog, index) => (
          <div
            key={index}
            id={blog.title}  // Adding ID for scroll reference
            className="blog-item"
          >
            <Blog
              imageSrc={blog.imageSrc}
              iconSrc={blog.iconSrc}
              bloodPressure={blog.bloodPressure}
              title={blog.title}
              description={blog.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
