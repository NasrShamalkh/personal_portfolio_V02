import React from 'react';
import { NavLink } from 'react-router-dom';
import './navBarStyle.css';
import NSlogo from './NSlogo.jpg';

const NavBar = function() {
  return (
    <nav>
      <div class='nav-wrapper'>
        <NavLink id='name-logo' to='/'>
          <img alt='Nasr logo' id='NSlogo' src={NSlogo} />
        </NavLink>
        <ul id='nav-mobile' class='right'>
          <li>
            <NavLink id='navLinks' to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink id='navLinks' to='/blogs'>
              Blogs
            </NavLink>
          </li>
          <NavLink id='navLinks' to='/projects'>
            Projects
          </NavLink>
          <li>
            <NavLink id='navLinks' to='/about'>
              about
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
