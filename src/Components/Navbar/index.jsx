import React from 'react';
import './style.scss';
import logo from '../../images/svg/logo.svg';


function Navbar() {
  return (
    <header>
      <img src={logo} alt="logo" />
      <nav>
        <ul>
          <li> Home </li>
          <li> Absences </li>
          <li> Employees </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
