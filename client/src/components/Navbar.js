import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/community-2.svg';
import './Navbar.css'; 
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container header-top">
        {/* <h1 className="logo">Community</h1> */}
        <img src={logo} alt="Logo" className="logo-img" />
        <ul className="nav-links">
          <li><Link to="/" exact activeClassName="active">Home</Link></li>
          <li><Link to="/login" activeClassName="active">Login</Link></li>
          <li><Link to="/register" activeClassName="active">Register</Link></li>
          <li><Link to="/share-ideas" activeClassName="active">Share Ideas</Link></li> 
          <li><Link to="/collaborate" activeClassName="active">Collaborate</Link></li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

