import React from "react";
import ImageCardAnimation from "../components/ImageCardAnimation/ImageCardAnimation";
import SearchComponent from "../components/SearchComponent/SearchComponent";
import "./BookAppointmentPage.scss";

const BookAppointmentPage = () => {
  return (
    <div className="book-appointment">
      {/* Left Section */}
      <div className="book-appointment__images">
        <ImageCardAnimation direction="desktop" />
      </div>

      {/* Right Section  */}
      <div className="book-appointment__right">
        <div className="book-appointment__header">
          <h1>
            Book an appointment with <span>lifestyle medicine</span> experts
          </h1>
          <p>Optimize your lifestyle and reverse chronic diseases.</p>
        </div>
        <div className="book-appointment__search">
          <SearchComponent />
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentPage;
