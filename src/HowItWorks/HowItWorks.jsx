import React, { useState, useEffect } from "react";
import BlogList from "../components/Blog/BlogList";

const HowItWorks = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <div className="how-it-works-header">
        <h2 style={{ color: "#666", fontSize: "16px", fontWeight: "bold", marginBottom: "8px" }}>
          HOW IT WORKS
        </h2>
        <p style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "24px" }}>
          <span
            style={{
              background: "linear-gradient(to right, #ff7e5f, #feb47b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontStyle: "italic",
            }}
          >
            Lifestyle as medicine:
          </span>
          <span style={{ color: "#666", marginLeft: "8px" }}>The six pillars</span>
        </p>
      </div>

      {/* Blog List */}
      <BlogList selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </div>
  );
};

export default HowItWorks;
