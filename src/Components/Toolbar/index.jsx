import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/svg/logo.svg';
import './style.scss';
import Navbar from '../Navbar';
import Media from 'react-media';
import SideBar from '../SideBar';

const Toolbar = () => {
  return (
    <header className={useLocation().pathname === '/' ?  'home-style' : 'not-home-style'}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Media
        queries={{
          medium: '(max-width: 1024px)'
        }}
      >
        {(matches) => (matches.medium ? <SideBar /> : <Navbar />)}
      </Media>
    </header>
  );
};

export default Toolbar;
