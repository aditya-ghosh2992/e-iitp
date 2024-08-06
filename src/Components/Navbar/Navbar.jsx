import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import iitp_logo from '../../assets/iitp-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar dark-nav">
      <img src={iitp_logo} alt="logo" className="logo" />
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><NavLink to="/" onClick={handleNavLinkClick}>Home</NavLink></li>
        <li><a href="#about" onClick={handleNavLinkClick}>About Us</a></li>
        <li><a href="#clubs" onClick={handleNavLinkClick}>Clubs</a></li>
        <li><a href="#community" onClick={handleNavLinkClick}>Community</a></li>
        <li><a href="#events" onClick={handleNavLinkClick}>Events</a></li>
        <li><a href="#teams" onClick={handleNavLinkClick}>Teams</a></li>
        <li><button className="btn" onClick={() => { navigate('/register'); setIsOpen(false); }}>Register</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
