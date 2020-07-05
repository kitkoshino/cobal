import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style.scss';

function Navbar() {
  return (
    <nav className={`navbar-container ${useLocation().pathname === '/' && `home-width`}`}>
      <ul>
        <Link to="/">
          <li> Home </li>
        </Link>
        <Link to="/">
          <li> Absences </li>
        </Link>
        <Link to="/employees">
          <li> Employees </li>
        </Link>
        {useLocation().pathname !== '/' && (
          <Link to="/employee">
            <button> New Employee </button>
          </Link>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
