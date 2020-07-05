import React, { useState } from 'react';
import { MdClear, MdMenu } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import './style.scss';

const SideBar = ({ width, height }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="side-bar-container">
      <button onClick={() => toggleMenu()} className="toggle-menu">
        {isOpen ? <MdClear /> : <MdMenu />}
      </button>
      <div
        className={`side-bar ${
          useLocation().pathname !== '/' && 'not-home-style'
        } ${isOpen ? 'open' : 'close'}`}
      >
        <div className="content">
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
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
