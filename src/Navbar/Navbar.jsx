import React from "react";
import "./NavbarCSS.css";
function Navbar({ lightMode, DarkMode }) {
  return (
    <div className="nav" id= "nav">
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

      <div className="nav-links">
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
        <label htmlFor="checkbox" className="label">
          {/* <i className="fas fa-moon"></i> */}
          {/* <i className="fas fa-sun"></i> */}
          <div className="ball"></div>
        </label>
      </div>
    </div>
  );
}

export default Navbar;
