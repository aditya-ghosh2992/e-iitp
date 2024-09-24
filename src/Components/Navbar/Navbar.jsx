import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import iitp_logo from '../../assets/logo1.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  // yeh Function hai jisse navigate hota hai home pe fir scroll hota hai perticular section pe
  const handleScrollToSection = (sectionId) => {
    navigate('/');  
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });  
      }
    }, 100);  
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
        <li><a onClick={() => handleScrollToSection('about')}>About Us</a></li>
        <li><a onClick={() => handleScrollToSection('clubs')}>Clubs</a></li>
        <li><a onClick={() => handleScrollToSection('community')}>Community</a></li>
        <li><a onClick={() => handleScrollToSection('events')}>Events</a></li>
        <li><a onClick={() => handleScrollToSection('teams')}>Teams</a></li>
        <li><button className="btn" onClick={() => { navigate('/register'); setIsOpen(false); }}>Register</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
