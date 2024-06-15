import React, { useState } from "react";
import "./Footer.css"; 

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const subscribeNewsletter = (event) => {
    event.preventDefault();
    if (validateEmail(email)) {
      alert("Thank you for subscribing!");
      setEmail("");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <footer>
      <div className="footer-container">
        <div className="logo">
          <img src="/img/logo.png" alt="Ride EVEE" />
        </div>

        <nav>
        <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">News</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </nav>
        <div className="newsletter">
          <label htmlFor="newsletter-email">Newsletter</label>

          <input
            type="email"
            id="newsletter-email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />

          <button onClick={subscribeNewsletter}>→</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>All Copyrights are reserved by YATRI CABS</p>
      </div>
    </footer>
  );
};

export default Footer;
