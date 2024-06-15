import React from "react";
import "./Header.css"; 

const Header = () => {

  return (
    <header className="header">
      <div className="logo">
        <img src="/img/logo.png" alt="logo" />
      </div>
      <div className="contact-info">
        <div className="contact-section left-section">
          <span>24</span>
        </div>

        <div className="contact-section middle-section">
          <span>7</span>
          <span className="clock-icon">&#128338;</span>
        </div>

        <div className="contact-section right-section">
          <span>+91876578984</span>
        </div>
      </div>
      <div className="download-app">
        <img src="/img/download.png" alt="" />
        <a href="https://play.google.com/store/apps/details?id=net.openkochi.yatri&hl=en_AU" className="none">
          <span>Download App</span>
        </a>
      </div>
      <div className="user">
        <img src="/img/user.png" alt="user" />
        <span>Ravi</span>
      </div>
    </header>
  );
};

export default Header;
