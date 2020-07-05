import React, { useState, useEffect } from 'react';
import { MdMenu, MdClear } from 'react-icons/md';
import './style.scss';
import { Link, useLocation } from 'react-router-dom';

const SideBar = ({ width, height }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [xPosition, setXPosition] = useState(-300);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="side-bar-container">
      <button onClick={() => toggleMenu()} className="toggle-menu">
        {isOpen ? <MdClear /> : <MdMenu />}
      </button>
      <div
        className={`side-bar ${
          useLocation().pathname !== '/' && 'not-home-style'
        } ${isOpen ? 'open' : 'close'}`}
      >
        <nav className="content">
          <Link to="/" onClick={toggleMenu}>
            <p>Home</p>
          </Link>
          <Link to="/" onClick={toggleMenu}>
            <p>Absences</p>
          </Link>
          <Link to="/employees" onClick={toggleMenu}>
            <p>Employees</p>
          </Link>
          {useLocation().pathname !== '/' && (
            <Link to="/employee" onClick={toggleMenu}>
              <button> New Employee </button>
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
