import React from "react";

const ImageOnly = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <img 
        src="/path/to/your-image.png" 
        alt="Divider" 
        style={{ width: "100px", height: "100px" }} 
      />
    </div>
  );
};

export default ImageOnly;
