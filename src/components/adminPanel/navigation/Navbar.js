import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../colors';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut } from '../../../store/actions/authActions';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useFirestoreConnect } from 'react-redux-firebase';
import { mediaQueries } from '../../../mixins';

const SideNavbarDiv = styled.div`
  background-color: rgba(${colors.secondary});
  min-width: 15%;

  & .user-img {
    width: 7rem;
    height: 7rem;
    margin: 2rem auto;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  & .user-initials {
    width: 7rem;
    height: 7rem;
    margin: 2rem auto;
    background-color: rgba(${colors.primary});
    border-radius: 50%;
    color: rgba(${colors.secondary5});
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .nav-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media ${mediaQueries('tab-port')} {
      flex-direction: column;
    }

    & li {
      border-bottom: 1px solid rgba(${colors.secondary3});
      background-color: rgba(${colors.secondary});
      margin: 0.5rem 1rem;

      @media ${mediaQueries('tab-port')} {
        margin: 0;
      }

      &:hover {
        background-color: rgba(${colors.secondary2});
      }

      & a {
        display: block;
        text-align: center;
        color: rgba(${colors.secondary5});
        padding: 1rem;

        @media ${mediaQueries('tab-port')} {
          padding: 1rem 0;
        }
      }

      & a.active {
        background-color: rgba(${colors.secondary2});
      }
    }
  }
`;

function Navbar() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.firebase.auth);
  const history = useHistory();
  useFirestoreConnect('users');
  const users = useSelector((state) => state.firestore.ordered.users);
  const uid = useSelector((state) => state.firebase.auth.uid);
  const user = users && users.filter((user) => user.id === uid)[0];

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(LogOut());

    history.push('/admin-panel/log-in');
  };

  return (
    <SideNavbarDiv className="side_navbar">
      {user && user.userImg !== null ? (
        <div
          className="user-img"
          style={{ backgroundImage: `url(${user.userImg})` }}
        ></div>
      ) : (
        <div className="user-initials">
          <span>
            {user && user.firstName[0]}
            {user && user.lastName[0]}
          </span>
        </div>
      )}
      <ul className="nav-list">
        <li>
          <NavLink to="/admin-panel/add-new-property">
            Dodaj nową nieruchomość
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin-panel/added-properties">
            Dodane nieruchomości
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin-panel/archives">Archiwum</NavLink>
        </li>
        <li>
          <NavLink to="/admin-panel/deleted-properties">
            Usunięte nieruchomości
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin-panel/users">Użytkownicy</NavLink>
        </li>

        <li>
          <NavLink to="/admin-panel/account">Konto</NavLink>
        </li>
        <li>
          <NavLink to="/admin-panel/log-in" onClick={handleClick}>
            Wyloguj
          </NavLink>
        </li>
        <li>
          <a href="/">Strona główna</a>
        </li>
      </ul>
    </SideNavbarDiv>
  );
}

export default Navbar;
