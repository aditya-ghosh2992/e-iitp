import React from 'react';
import { FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer text-white p-8 relative">
      <div className="footer-content container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="footer-col">
          <h3 className="footer-title">Know More</h3>
          <ul className="footer-links">
            <li>About Us</li>
            <li>Gallery</li>
            <li>Clubs</li>
            <li>Important Links</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3 className="footer-title">Query</h3>
          <ul className="footer-links">
            <li>Contact Us</li>
            <li>Address: IIT Patna Bihta Bihar India</li>
            <li>Email: egymkhana@iitp.ac.in</li>
          </ul>
        </div>
        <div className="footer-col">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-icons flex space-x-4">
            <a href="https://twitter.com" className="social-icon"><FaTwitter /></a>
            <a href="https://instagram.com" className="social-icon"><FaInstagram /></a>
            <a href="https://facebook.com" className="social-icon"><FaFacebookF /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center mt-8">
        &copy; {new Date().getFullYear()} E-GYMKHANA, IIT Patna. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
