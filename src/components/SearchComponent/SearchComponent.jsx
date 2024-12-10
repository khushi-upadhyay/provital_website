import React from "react";
import "./SearchComponent.scss";

const SearchComponent = () => {
  return (
    <div className="search-container">
      <div className="search-field">
      <img 
    src="/images/search/condition.png" 
    alt="Location Icon" 
    style={{ width: "24px", height: "24px" }} 
  />
        <input
          type="text"
          placeholder="Condition, procedure, specialty..."
          className="input-field"
        />
      </div>

      <div className="search-field">
      <img 
    src="/images/search/city.png" 
    alt="Location Icon" 
    style={{ width: "24px", height: "24px" }} 
  />
        <input
          type="text"
          placeholder="City, state, or zipcode"
          className="input-field"
        />
      </div>

      <div className="search-field">
      <img 
    src="/images/search/insurance.png" 
    alt="Location Icon" 
    style={{ width: "24px", height: "24px" }} 
  />
        <input
          type="text"
          placeholder="Insurance carrier"
          className="input-field"
        />
      </div>

      <button className="search-button">
        <span className="button-icon">🔍</span> Find now
      </button>
    </div>
  );
};

export default SearchComponent;
