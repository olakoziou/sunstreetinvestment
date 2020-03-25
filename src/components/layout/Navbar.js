import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../img/ssi-logo.png';

const NavBar = styled.nav`
  background-color: rgba(32, 64, 81, 1);
`;

const Logo = styled.img`
  height: 64px;
`;

function Navbar() {
  return (
    <NavBar>
      <div className="nav-wrapper container">
        <a href="#" className="brand-logo">
          <Logo src={logo} alt="" height="64px" />
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </NavBar>
  );
}

export default Navbar;
