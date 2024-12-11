import React, { useState, useEffect, useRef } from "react";
import "./Header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); 
  const [dropdownOpen, setDropdownOpen] = useState(false); 
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); 
  
  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null); 
  const menuRef = useRef(null); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target)) {
        setMobileDropdownOpen(false);
      }
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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
    <header className="header">
      <div className="header__content">

        <div className="header__logo">
          <img src="/images/logo/logo.jpeg" alt="ProVital Logo" />
          <span>ProVital</span>
        </div>

        <div className="header__menu-icon" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>

        <nav className="header__nav">
          <a href="#practice">List your practice</a> 
          <a href="#employers">For Employers</a> 
          <a href="#courses">Courses</a>
          <a href="#books">Books</a> 
          <a href="#speakers">Speakers</a> 
          <a href="#doctors">Doctors</a> 

         
          <div
            className="header__dropdown"
            onClick={toggleDropdown}
            ref={dropdownRef}
          >
            <span>
              Login / Signup <span className="dropdown-arrow">▼</span>
            </span>
            {dropdownOpen && (
              <div className="header__dropdown-menu">
                <div className="dropdown-item">
                  <span>Doctor</span>
                  <a href="#doctor-login">Login</a>  <a href="#doctor-signup">Signup</a>
                </div>
                <div className="dropdown-item">
                  <span>Patient</span>
                  <a href="#patient-login">Login</a>  <a href="#patient-signup">Signup</a>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>

    
      {menuOpen && (
        <div className="header__mobile-menu" ref={menuRef}>
        
          <div
            className="mobile-menu__item"
            onClick={toggleMobileDropdown}
            ref={mobileDropdownRef}
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
