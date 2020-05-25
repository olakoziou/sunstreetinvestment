import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../img/ssi-logo.png';
import { colors } from '../../colors';
import M from 'materialize-css/dist/js/materialize.min.js';

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  z-index: 1000;
  transition: all 0.2s;
  z-index: 100000;

  & .nav-wrapper {
    max-width: 80%;
    margin: 0 auto;
    & ul li a {
      font-size: 1.2rem;
    }

    & ul li a.active {
      color: rgba(${colors.extra}, 0.9);
      border-bottom: 3px solid rgba(${colors.extra}, 0.9);
    }

    & a.sidenav-trigger i {
      line-height: 4rem;
    }
  }
`;

const Logo = styled.img`
  height: 64px;
`;

const MobileNavbar = styled.ul`
  padding-top: 15rem;
  z-index: 10000;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & li a {
    font-size: 1.2rem;
  }

  & li:hover {
    background-color: rgba(${colors.secondary5});
  }
`;

function Navbar() {
  const [state, setState] = useState({ isTop: true });

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 500;
      if (isTop !== state) {
        setState((state) => ({ ...state, isTop }));
      }
    });
  }, [state.isTop]);

  useEffect(() => {
    M.AutoInit();
  }, []);

  const height = state.isTop ? '55px' : '50px';
  const lineHeight = state.isTop ? '55px' : '50px';
  return (
    <>
      <NavBar
        className="navbar"
        style={{
          background: `rgba(${colors.primary}, ${
            state.isTop ? '0.85' : '0.95'
          })`,
          height,
          lineHeight,
        }}
      >
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            <Logo
              src={logo}
              alt=""
              style={{ height, transition: 'all 0.2s' }}
            />
          </a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/nieruchomosci/">Inwestycje</NavLink>
            </li>
            <li>
              <NavLink to="/archiwum">Archiwum</NavLink>
            </li>
          </ul>
        </div>
      </NavBar>
      <MobileNavbar className="sidenav" id="mobile-demo">
        <li>
          <NavLink to="/nieruchomosci/">Inwestycje</NavLink>
        </li>
        <li>
          <NavLink to="/archiwum">Archiwum</NavLink>
        </li>
      </MobileNavbar>
    </>
  );
}

export default Navbar;
