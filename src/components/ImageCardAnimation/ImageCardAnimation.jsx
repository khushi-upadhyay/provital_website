import React from "react";
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

  return (
    <div className="image-card-animation">
      <div className="desktop-view">
        <div className="column move-up">
          {images.slice(0, 4).map((image, index) => (
            <div className="card" key={index}>
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="column move-down">
          {images.slice(4, 8).map((image, index) => (
            <div className="card" key={index}>
              <img src={image} alt={`Image ${index + 5}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="mobile-view">
        <div className="row move-right-left">
          {images.map((image, index) => (
            <div className="card" key={index}>
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCardAnimation;



