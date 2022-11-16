import React from "react";
import LandingPage from "../Landing/LandingPage";
import "./NavbarCSS.css";
function Navbar({ lightMode, DarkMode }) {
  return (
    <div className={`nav ${lightMode ? "" : "nav-dark"}`} id= "nav">
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">Lency</div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div className={`nav-links ${lightMode ? "": "nav-links-dark"}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contacts">Contacts</a>
      </div>

      <div className="toggleDiv">
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          value={lightMode}
          onChange={() => DarkMode(!lightMode)}
        />
        <label htmlFor="checkbox" className={`label ${lightMode ? "": "label-dark"}`}>
          {/* <i className="fas fa-moon"></i> */}
          {/* <i className="fas fa-sun"></i> */}
          <div className={`ball ${lightMode ? "" : "ball-dark"}`}></div>
        </label>
      </div>
    </div>
  );
}

export default Navbar;
