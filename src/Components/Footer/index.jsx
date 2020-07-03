import React from 'react';
import logo from '../../images/svg/logo.svg';
import {
  FaFacebookF,
  FaDribbble,
  FaTwitter,
  FaLinkedinIn
} from 'react-icons/fa';
import './style.scss';
import { useLocation } from 'react-router-dom';

function Footer() {
  return (
    <footer className={useLocation().pathname !== '/' && 'not-home-style'}>
      <section className="footer-container">
        <div className="footer-about">
          <img src={logo} alt="logo" />
          <p>
            Me old mucker Harry don't get shirty with me he nicked up the kyver
            gutted mate spend a penny,bloke my good sir in my flat bleeding
            quaint.!
          </p>
          <div className="social-media">
            <FaFacebookF />
            <FaTwitter />
            <FaDribbble />
            <FaLinkedinIn />
          </div>
        </div>

        <div className="footer-items">
          <h4>Company</h4>
          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Screenshots</li>
            <li>Pricing</li>
            <li>Team</li>
          </ul>
        </div>
        <div className="footer-items">
          <h4>Help</h4>
          <ul>
            <li>Help Center</li>
            <li>FAQ's</li>
            <li>Terms & Conditions</li>
            <li>Privacy</li>
            <li>Contacts</li>
          </ul>
        </div>
        <div className="footer-items">
          <h4>Solutions</h4>
          <ul>
            <li>Consumer</li>
            <li>Saas</li>
            <li>Education</li>
            <li>Gaming</li>
            <li>Financial Services</li>
          </ul>
        </div>
      </section>
      <p>©indianpix | All rights reserved 2019</p>
    </footer>
  );
}

export default Footer;
