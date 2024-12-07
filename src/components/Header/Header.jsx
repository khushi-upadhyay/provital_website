import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/path-to-logo.png" alt="ProVital Logo" />
      </div>
      <nav className="header__nav">
        <a href="#practice">List your practice</a>
        <a href="#employers">For Employers</a>
        <a href="#courses">Courses</a>
        <a href="#books">Books</a>
        <a href="#speakers">Speakers</a>
        <div className="header__dropdown">
          <span>Doctors</span>
          <div className="header__dropdown-menu">
            <a href="#login-doctors">Login</a>
            <a href="#signup-doctors">Sign up</a>
          </div>
        </div>
        <div className="header__dropdown">
          <span>Patients</span>
          <div className="header__dropdown-menu">
            <a href="#login-patients">Login</a>
            <a href="#signup-patients">Sign up</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
