import React from "react";
import ImageCardAnimation from "../components/ImageCardAnimation/ImageCardAnimation";
import SearchComponent from "../components/SearchComponent/SearchComponent";
import "./BookAppointmentPage.scss";

const BookAppointmentPage = () => {
  return (
    <div className="book-appointment">
      {/* Header Section */}
      <div className="book-appointment__header">
        <h1>
          Book an appointment with <span>lifestyle medicine</span> experts
        </h1>
        <p>Optimize your lifestyle and reverse chronic diseases.</p>
      </div>

      {/* Search Section */}
      <div className="book-appointment__search">
        <SearchComponent />
      </div>

      {/* Image Animation Section */}
      <div className="book-appointment__images">
        <ImageCardAnimation direction="desktop" />
      </div>
    </div>
  );
};

export default BookAppointmentPage;
