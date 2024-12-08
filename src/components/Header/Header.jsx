import React, { useState, useEffect } from "react";
import "./Header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu toggle
  const [dropdownOpen, setDropdownOpen] = useState(false); // Desktop dropdown toggle
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // Mobile submenu toggle

// close hamburger on desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false); // Close the mobile menu on larger screens
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); 
    };
  }, []);



  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  return (
    <header className="header sticky">
      <div className="header__content">
        {/* Logo */}
        <div className="header__logo">
          <img src="/images/logo/logo.jpeg" alt="ProVital Logo" />
          <span>ProVital</span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="header__menu-icon" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>

        {/* Desktop Navigation */}
        <nav className="header__nav">
          <a href="#practice">List your practice</a>
          <a href="#employers">For Employers</a>
          <a href="#courses">Courses</a>
          <a href="#books">Books</a>
          <a href="#speakers">Speakers</a>
          <a href="#doctors">Doctors</a>
        
          {/* Login / Signup Dropdown */}
          <div className="header__dropdown" onClick={toggleDropdown}>
            <span>
              Login / Signup <span className="dropdown-arrow">▼</span>
            </span>
            {dropdownOpen && (
              <div className="header__dropdown-menu">
                <div className="dropdown-item">
                  <span>Doctor</span>
                  <a href="#doctor-login">Login</a> | <a href="#doctor-signup">Signup</a>
                </div>
                <div className="dropdown-item">
                  <span>Patient</span>
                  <a href="#patient-login">Login</a> | <a href="#patient-signup">Signup</a>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="header__mobile-menu">
          {/* Mobile Login/Signup Dropdown */}
          <div
            className="mobile-menu__item"
            onClick={toggleMobileDropdown}
          >
            <span>
              Login / Signup <span className="dropdown-arrow">▼</span>
            </span>
            {mobileDropdownOpen && (
              <div className="mobile-menu__submenu">
                <div className="dropdown-item">
                  <span>Doctor</span>
                  <a href="#doctor-login">Login</a> | <a href="#doctor-signup">Sign up</a>
                </div>
                <div className="dropdown-item">
                  <span>Patient</span>
                  <a href="#patient-login">Login</a> | <a href="#patient-signup">Sign up</a>
                </div>
              </div>
            )}
          </div>

           {/* Other Mobile Links */}
           <a className="mobile-menu__link" href="#doctors">
            Doctors <span className="long-arrow">→</span>
          </a>
          <a className="mobile-menu__link" href="#patients">
            Patients <span className="long-arrow">→</span>
          </a>
          <a className="mobile-menu__link" href="#practice">
            List your practice <span className="long-arrow">→</span>
          </a>
          <a className="mobile-menu__link" href="#employers">
            For Employers <span className="long-arrow">→</span>
          </a>
          <a className="mobile-menu__link" href="#courses">
            Courses <span className="long-arrow">→</span>
          </a>
          <a className="mobile-menu__link" href="#books">
            Books <span className="long-arrow">→</span>
          </a>
          <a className="mobile-menu__link" href="#speakers">
            Speakers <span className="long-arrow">→</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
