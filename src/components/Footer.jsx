import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-section">
          <h3>Social</h3>
          <p>Follow us for the latest update</p>
          <div className="social-links">
            <a href="https://www.facebook.com/wyreflowtechnologies/" target="_blank" rel="noopener noreferrer" title="Facebook">f</a>
            <a href="https://www.instagram.com/wyreflow_technologies/" target="_blank" rel="noopener noreferrer" title="Instagram">📷</a>
            <a href="https://www.youtube.com/@WyreflowTechnologies" target="_blank" rel="noopener noreferrer" title="YouTube">▶</a>
            <a href="https://www.linkedin.com/company/wyreflow-technologies" target="_blank" rel="noopener noreferrer" title="LinkedIn">in</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Industries</h3>
          <ul>
            <li><a href="#">Banking</a></li>
            <li><a href="#">Consulting</a></li>
            <li><a href="#">Communications and Media</a></li>
            <li><a href="#">E-commerce</a></li>
            <li><a href="#">Ed-Tech / Education</a></li>
            <li><a href="#">HealthCare</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Artificial Intelligence</a></li>
            <li><a href="#">Cloud</a></li>
            <li><a href="#">Consulting</a></li>
            <li><a href="#">Cybersecurity</a></li>
            <li><a href="#">Data & Analytics</a></li>
            <li><a href="#">Enterprise Solutions</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>More Information</h3>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Privacy Notice</a></li>
            <li><a href="#">Terms & Condition</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Wyreflow. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
