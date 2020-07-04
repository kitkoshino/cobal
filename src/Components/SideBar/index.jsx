import React, { useState, useEffect } from 'react';
import { MdMenu,MdClear } from 'react-icons/md';
import './style.scss';
import { Link, useLocation } from 'react-router-dom';

const SideBar = ({ width, height }) => {
  const [xPosition, setX] = useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

  useEffect(() => {
    setX(-300);
  }, []);

  return (
    <div className="side-bar-container">
      <button onClick={() => toggleMenu()} className="toggle-menu">
        {xPosition !== 0 ? (<MdMenu />) : (<MdClear />)}

      </button>
      <div
        className={useLocation().pathname !== '/' ? 'not-home-style': 'side-bar'}
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height
        }}
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
    </div>
  );
};

export default SideBar;
