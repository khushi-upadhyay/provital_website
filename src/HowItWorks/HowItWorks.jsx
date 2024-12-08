// import React from "react";
// import BlogList from "../components/Blog/BlogList";// Import the BlogList component
// import "./HowItWorks.scss";

// const HowItWorks = () => {
//   return (
//     <div className="how-it-works">
//       {/* Header Section */}
//       <div className="how-it-works-header">
//         <h3 className="how-it-works-title">HOW IT WORKS</h3>
//         <h2 className="how-it-works-subtitle">
//           <span>Lifestyle as medicine:</span> The six pillars
//         </h2>
//       </div>

//       {/* Tabs Section */}
//       <div className="tabs-section">
//         <button className="tab active">Nutrition</button>
//         <button className="tab">Physical activity</button>
//         <button className="tab">Restorative sleep</button>
//         <button className="tab">Stress management</button>
//         <button className="tab">Social connection</button>
//         <button className="tab">Substance abuse</button>
//         <div className="arrow-buttons">
//           <button className="arrow-button left">
//             &larr;
//           </button>
//           <button className="arrow-button right">
//             &rarr;
//           </button>
//         </div>
//       </div>

//       {/* BlogList Component */}
//       <div className="blog-list-container">
//         <BlogList />
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;




// import React, { useRef, useState } from "react";
// import BlogList from "../components/Blog/BlogList";

// const HowItWorks = () => {
//   const [selectedTab, setSelectedTab] = useState("All"); // Default to show all
//   const scrollRef = useRef(null); // Reference for horizontal scrolling

//   const tabs = [
//     "All",
//     "Nutrition",
//     "Physical activity",
//     "Restorative sleep",
//     "Stress management",
//     "Social connection",
//     "Substance abuse",
//   ];

//   // Scroll function
//   const handleScroll = (direction) => {
//     const scrollAmount = 300; // Adjust for scroll step
//     if (direction === "left" && scrollRef.current) {
//       scrollRef.current.scrollLeft -= scrollAmount;
//     } else if (direction === "right" && scrollRef.current) {
//       scrollRef.current.scrollLeft += scrollAmount;
//     }
//   };

//   return (
//     <div style={{ textAlign: "center", position: "relative", width: "100%" }}>
//       <h2>How It Works</h2>
//       <p>Lifestyle as medicine: The six pillars</p>

//       {/* Tab Navigation */}
//       <div style={{ display: "flex", justifyContent: "center", gap: "16px", margin: "16px 0" }}>
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             style={{
//               padding: "8px 16px",
//               border: "none",
//               borderRadius: "16px",
//               backgroundColor: selectedTab === tab ? "#007bff" : "#e0e0e0",
//               color: selectedTab === tab ? "#fff" : "#000",
//               cursor: "pointer",
//             }}
//             onClick={() => setSelectedTab(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* BlogList with Side Arrows */}
//       <div style={{ position: "relative", overflow: "hidden" }}>
//         {/* Left Arrow */}
//         <button
//           onClick={() => handleScroll("left")}
//           style={{
//             position: "absolute",
//             top: "50%",
//             left: "16px",
//             transform: "translateY(-50%)",
//             zIndex: 1,
//             backgroundColor: "#fff",
//             border: "none",
//             borderRadius: "50%",
//             boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
//             cursor: "pointer",
//             padding: "8px",
//           }}
//         >
//           {"<"}
//         </button>

//         {/* Blog List */}
//         <div ref={scrollRef}>
//           <BlogList selectedTab={selectedTab} />
//         </div>

//         {/* Right Arrow */}
//         <button
//           onClick={() => handleScroll("right")}
//           style={{
//             position: "absolute",
//             top: "50%",
//             right: "16px",
//             transform: "translateY(-50%)",
//             zIndex: 1,
//             backgroundColor: "#fff",
//             border: "none",
//             borderRadius: "50%",
//             boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
//             cursor: "pointer",
//             padding: "8px",
//           }}
//         >
//           {">"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default HowItWorks;



import React, { useRef, useState } from "react";
import BlogList from "../components/Blog/BlogList";

const HowItWorks = () => {
  const [selectedTab, setSelectedTab] = useState("All"); // Default to show all
  const scrollRef = useRef(null); // Reference for horizontal scrolling

  const tabs = [
    "All",
    "Nutrition",
    "Physical activity",
    "Restorative sleep",
    "Stress management",
    "Social connection",
    "Substance abuse",
  ];

  // Scroll function
  const handleScroll = (direction) => {
    const scrollAmount = 300; // Adjust for scroll step
    if (direction === "left" && scrollRef.current) {
      scrollRef.current.scrollLeft -= scrollAmount;
    } else if (direction === "right" && scrollRef.current) {
      scrollRef.current.scrollLeft += scrollAmount;
    }
  };

  return (
    <div style={{ textAlign: "center", position: "relative", width: "100%" }}>
      <h2>How It Works</h2>
      <p>Lifestyle as medicine: The six pillars</p>

      {/* Tab Navigation */}
      <div style={{ display: "flex", justifyContent: "center", gap: "16px", margin: "16px 0", position: "relative" }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            style={{
              padding: "8px 16px",
              border: "none",
              borderRadius: "16px",
              backgroundColor: selectedTab === tab ? "#007bff" : "#e0e0e0",
              color: selectedTab === tab ? "#fff" : "#000",
              cursor: "pointer",
            }}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
        
        {/* Right Arrow for scrolling */}
        <button
          onClick={() => handleScroll("right")}
          style={{
            position: "absolute",
            top: "50%",
            right: "16px",
            transform: "translateY(-50%)",
            backgroundColor: "#fff",
            border: "none",
            borderRadius: "50%",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            padding: "8px",
            zIndex: 1,
          }}
        >
          {">"}
        </button>
      </div>

      {/* Blog List with Horizontal Scroll */}
      <div style={{ position: "relative", overflowX: "auto", padding: "16px" }}>
        <div ref={scrollRef} style={{ display: "flex", gap: "24px" }}>
          <BlogList selectedTab={selectedTab} />
        </div>
        
        {/* Left Arrow for scrolling */}
        <button
          onClick={() => handleScroll("left")}
          style={{
            position: "absolute",
            top: "50%",
            left: "16px",
            transform: "translateY(-50%)",
            backgroundColor: "#fff",
            border: "none",
            borderRadius: "50%",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            padding: "8px",
            zIndex: 1,
          }}
        >
          {"<"}
        </button>
      </div>
    </div>
  );
};

export default HowItWorks;
