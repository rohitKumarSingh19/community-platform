import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/community-2.svg';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container header-top">
        <NavLink to="/" className="logo-link">
          <img src={logo} alt="Logo" className="logo-img" />
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/share-ideas"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Share Ideas
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/collaborate"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Collaborate
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/learn-grow"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Learn & Grow
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

