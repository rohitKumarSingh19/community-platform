// import React from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../assets/community-2.svg';
// import './Navbar.css'; 
// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="container header-top">
//         {/* <h1 className="logo">Community</h1> */}
//         <Link to="/" className="logo-link">
//         <img src={logo} alt="Logo" className="logo-img" />
//         </Link>
//         <ul className="nav-links">
//           <li><Link to="/" exact activeClassName="active">Home</Link></li>
//           <li><Link to="/login" activeClassName="active">Login</Link></li>
//           <li><Link to="/register" activeClassName="active">Register</Link></li>
//           <li><Link to="/share-ideas" activeClassName="active">Share Ideas</Link></li> 
//           <li><Link to="/collaborate" activeClassName="active">Collaborate</Link></li>
//           <li><Link to="/learn-grow" activeClassName="active">Learn&Grow</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };
// export default Navbar;
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

