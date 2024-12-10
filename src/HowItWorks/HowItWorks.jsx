import React, { useEffect, useRef, useState } from "react";
import BlogList from "../components/Blog/BlogList";

const HowItWorks = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const scrollRef = useRef(null);

  const tabs = [
    "Nutrition",
    "Physical activity",
    "Restorative sleep",
    "Stress management",
    "Social connection",
    "Substance abuse",
  ];

  const handleScroll = (direction) => {
    const scrollAmount = 300; 
    if (scrollRef.current) {
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else if (direction === "right") {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

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
    <div style={{ textAlign: "center", position: "relative", width: "100%" }}>
      {/* Header Section */}
      <h2 style={{ color: "#666", fontSize: "16px", fontWeight: "bold", marginBottom: "8px", textAlign: "left" }}>
        HOW IT WORKS
      </h2>
      <p style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "24px", textAlign: "left" }}>
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
      {!isMobile && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: "16px 20px", position: "relative" }}>
          {/* Tabs */}
          <div style={{ display: "flex", gap: "25px", overflowX: "auto", flex: 1 }}>
            {tabs.map((tab) => (
              <button
                key={tab}
                style={{
                  padding: "8px 20px",
                  border: "1px solid #ccc",
                  borderRadius: "16px",
                  backgroundColor: selectedTab === tab ? "#000" : "#fff",
                  color: selectedTab === tab ? "#fff" : "#000",
                  cursor: "pointer",
                }}
                onClick={() => setSelectedTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div style={{ display: "flex", gap: "16px", position: "absolute", right: "16px", alignItems: "center" }}>
            {/* Left Arrow */}
            <button
              onClick={() => handleScroll("left")}
              style={{
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderRadius: "50%",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                padding: "8px",
                fontSize: "20px",
              }}
            >
              {"←"}
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => handleScroll("right")}
              style={{
                backgroundColor: "#fff",
                border: "1px solid #ccc",
                borderRadius: "50%",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                padding: "8px",
                fontSize: "20px",
              }}
            >
              {"→"}
            </button>
          </div>
        </div>
      )}

      {/* Blog List with Horizontal Scroll */}
      <div style={{ position: "relative", overflowX: "hidden", padding: "16px" }}>
        <div
          ref={scrollRef}
          style={{
            display: "flex",
            gap: "24px",
            overflowX: "auto",
            scrollBehavior: "smooth",
            paddingBottom: "8px",
          }}
        >
          <BlogList selectedTab={selectedTab} />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
