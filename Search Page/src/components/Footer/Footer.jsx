import React from 'react';
import './Footer.css';  // Linking to your CSS file (footer.css)
import iconSet from '../assets/icon.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-media-icons">
        <img src={iconSet} alt="Social Media Icons" className="social-icons" />
      </div>
      <div className="menu-container">
        <div className="column">
          <h2>Explore</h2>
          <a href="#">Home</a>
          <a href="#">Taught Courses</a>
          <a href="#">Research Courses</a>
          <a href="#">Universisties</a>
          <a href="#">Accommodation</a>
          <a href="#">Visa & Immigration</a>
        </div>

        <div className="column">
          <h2>Resources</h2>
          <a href="#">Blog</a>
          <a href="#">Visa & Travel</a>
          <a href="#">Accommodation</a>
          <a href="#">Application</a>
          <a href="#">Support</a>
          <a href="#">Teachers & Advisors</a>
          <a href="#">Resource Library</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;