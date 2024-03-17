import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaWhatsapp, FaBirthdayCake } from 'react-icons/fa'; 
import '../assets/style/Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/contacto">
            Contacto <FaWhatsapp /> 
          </Link>
        </li>
      </ul>
      <div>
        Happy Cake <FaBirthdayCake />
      </div>
    </nav>
  );
};

export default Navbar;
