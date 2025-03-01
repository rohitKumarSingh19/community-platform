// import React from 'react';
// import { Link } from 'react-router-dom';
// const Navbar = () => {
//   return (
//     <nav className="bg-blue-500 p-4 text-white">
//       <div className="container mx-auto flex justify-between">
//         <h1 className="text-xl font-bold">Community Platform</h1>
//         <div>
//           <Link to="/" className="mx-2">Home</Link>
//           <Link to="/login" className="mx-2">Login</Link>
//           <Link to="/register" className="mx-2">Register</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };
// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Community</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

