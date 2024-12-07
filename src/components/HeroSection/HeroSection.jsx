import React from 'react';
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero__images">
        <img src="/path-to-image1.jpg" alt="Lifestyle Image 1" />
        <img src="/path-to-image2.jpg" alt="Lifestyle Image 2" />
        <img src="/path-to-image3.jpg" alt="Lifestyle Image 3" />
        <img src="/path-to-image4.jpg" alt="Lifestyle Image 4" />
      </div>
      <div className="hero__content">
        <h1>
          Book an appointment with <span>lifestyle medicine experts</span>
        </h1>
        <p>Optimize your lifestyle and reverse chronic diseases.</p>
        <div className="hero__search">
          <input type="text" placeholder="Condition, procedure, specialty..." />
          <input type="text" placeholder="City, state, or zipcode" />
          <input type="text" placeholder="Insurance carrier" />
          <button>Find now</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
