
// import React from "react";
// import "./ImageCardAnimation.scss";

// const ImageCardAnimation = () => {
//   const images = [
//     "/images/ImageCard/image1.jpeg",
//     "/images/ImageCard/image2.jpeg",
//     "/images/ImageCard/image3.jpeg",
//     "/images/ImageCard/image4.jpeg",
//     "/images/ImageCard/image5.jpeg",
//     "/images/ImageCard/image6.jpeg",
//     "/images/ImageCard/image7.jpeg",
//     "/images/ImageCard/image8.jpeg",
//   ];

  

//   return (
//     <div className="image-card-animation">
//       <div className="frame">
//         <div className="desktop-view">
//           <div className="column move-up">
//             {images.slice(0, 4).map((image, index) => (
//               <div className="card" key={index}>
//                 <img src={image} alt={`Image ${index + 1}`} />
//               </div>
//             ))}
//           </div>
//           <div className="column move-down">
//             {images.slice(4, 8).map((image, index) => (
//               <div className="card" key={index}>
//                 <img src={image} alt={`Image ${index + 5}`} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageCardAnimation;


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

  const column1Images = [...images.slice(0, 4), ...images.slice(0, 4)]; // Duplicated images for column 1
  const column2Images = [...images.slice(4, 8), ...images.slice(4, 8)]; // Duplicated images for column 2

  return (
    <div className="image-card-animation">
      <div className="frame">
        <div className="desktop-view">
          {/* Column 1: Moving Up */}
          <div className="column move-up">
            {column1Images.map((image, index) => (
              <div className="card" key={`up-${index}`}>
                <img src={image} alt={`Image Up ${index + 1}`} />
              </div>
            ))}
          </div>
          {/* Column 2: Moving Down */}
          <div className="column move-down">
            {column2Images.map((image, index) => (
              <div className="card" key={`down-${index}`}>
                <img src={image} alt={`Image Down ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCardAnimation;
