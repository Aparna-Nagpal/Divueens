import React from 'react';
import './Navbar.css'; 
import {  FaHeart, FaShoppingCart,FaTimes, FaBars} from 'react-icons/fa'; // Import icons from react-icons/fa

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/path/to/your/logo.png" alt="Divueens" className="brand-icon" />
      </div>
      
      <div className="navbar-search">
        <input type="text"  className="search-input" />
        <button className="search-button">
           Search
        </button>
      </div>
      <div className="navbar-links">
        <a href="#">Makeup</a>
        <a href="#">Skin</a>
        <a href="#">Hair Care</a>
        <a href="#">Nail Care</a>
        <a href="#">Body Care</a>
        <a href="#">Tools and Accessories</a>
      </div>
      <div className="navbar-icons">
        <FaShoppingCart className="navbar-icon" />
        <FaHeart className="navbar-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
