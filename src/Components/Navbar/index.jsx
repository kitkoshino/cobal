import React, { useState } from 'react';
import './style.scss';
import logo from '../../images/svg/logo.svg';
import { useLocation, Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className={useLocation().pathname !== '/' && 'not-home-style'}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <nav>
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
    </header>
  );
}

export default Navbar;
