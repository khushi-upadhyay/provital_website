import React, { useState, useEffect } from "react";
import "./ImageCardAnimation.scss";

const ImageCardAnimation = () => {
  const images = [
    "/images/ImageCard/image1.jpeg",
    "/images/ImageCard/image2.jpeg",
    "/images/ImageCard/image3.jpeg",
    "/images/ImageCard/image4.jpeg",
    "/images/ImageCard/image5.jpeg",
    "/images/ImageCard/image6.jpeg",
    "/images/ImageCard/image7.jpeg",
    "/images/ImageCard/image8.jpeg",
  ];

  const column1Images = [...images.slice(0, 4), ...images.slice(0, 4)]; 
  const column2Images = [...images.slice(4, 8), ...images.slice(4, 8)]; 
  const mobileImages = [...images, ...images]; 

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateView = () => {
      setIsDesktop(window.innerWidth > 768); 
    };

    updateView(); 
    window.addEventListener("resize", updateView); 

    return () => window.removeEventListener("resize", updateView);
  }, []);

  return (
    <div className="image-card-animation">
      {isDesktop && (
        <div className="frame">
          {/* Desktop View */}
          <div className="desktop-view">
            <div className="column move-up">
              {column1Images.map((image, index) => (
                <div className="card" key={`up-${index}`}>
                  <img src={image} alt={`Image Up ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="column move-down">
              {column2Images.map((image, index) => (
                <div className="card" key={`down-${index}`}>
                  <img src={image} alt={`Image Down ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile View */}
      {!isDesktop && (
        <div className="mobile-view">
          <div className="scroll-row">
            {mobileImages.map((image, index) => (
              <div className="card" key={`mobile-${index}`}>
                <img src={image} alt={`Image Mobile ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCardAnimation;
