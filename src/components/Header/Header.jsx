import React, { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Hamburger menu toggle
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown toggle

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header">
      <div className="header__content">
        <div className="header__logo">
          <img src="/images/logo/logo.jpeg" alt="ProVital Logo" />
          <span>ProVital</span>
        </div>

        <nav className="header__nav">
          <a href="#practice">List your practice  |</a>
          <a href="#employers">For Employers  |</a>
          <a href="#courses">Courses  |</a>
          <a href="#books">Books  |</a>
          <a href="#doctors">Doctors  |</a>
          <div
            className="header__dropdown"
            onClick={toggleDropdown}
          >
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
    </header>
  );
};

export default Header;
// import React, { useState } from "react";
// import "./Header.scss";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false); // Hamburger menu toggle
//   const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown toggle

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <header className="header">
//       <div className="header__content">
//         {/* Logo Section */}
//         <div className="header__logo">
//           <img src="/images/logo/proVital.jpeg" alt="ProVital Logo" />
//           <span>ProVital</span>
//         </div>

//         {/* Hamburger Icon */}
//         <div className="header__hamburger" onClick={toggleMenu}>
//           <div className={`bar ${menuOpen ? "open" : ""}`}></div>
//           <div className={`bar ${menuOpen ? "open" : ""}`}></div>
//           <div className={`bar ${menuOpen ? "open" : ""}`}></div>
//         </div>

//         {/* Navigation Menu */}
//         <nav className={`header__nav ${menuOpen ? "open" : ""}`}>
//           <a href="#practice">List your practice</a>
//           <a href="#employers">For Employers</a>
//           <a href="#courses">Courses</a>
//           <a href="#books">Books</a>
//           <a href="#doctors">Doctors</a>
//           <div className="header__dropdown" onClick={toggleDropdown}>
//             <span>
//               Login / Signup <span className="dropdown-arrow">▼</span>
//             </span>
//             {dropdownOpen && (
//               <div className="header__dropdown-menu">
//                 <div className="dropdown-item">
//                   <span>Doctor</span>
//                   <a href="#doctor-login">Login</a> | <a href="#doctor-signup">Signup</a>
//                 </div>
//                 <div className="dropdown-item">
//                   <span>Patient</span>
//                   <a href="#patient-login">Login</a> | <a href="#patient-signup">Signup</a>
//                 </div>
//               </div>
//             )}
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
