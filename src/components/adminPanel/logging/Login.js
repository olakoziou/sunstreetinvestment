import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { LogIn } from '../../../store/actions/authActions';
import { Link } from 'react-router-dom';

const LoginDiv = styled.div``;

function Login({ resetPassword, displayResetPassword }) {
  const authError = useSelector((state) => state.auth.authError);
  const auth = useSelector((state) => state.firebase.auth);
  const dispatch = useDispatch();
  const [state, setState] = useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(LogIn(state));
  };

  const handleReset = (e) => {
    displayResetPassword({ display: true });
  };
  return (
    <LoginDiv className="login">
      <span className="title">Zaloguj się</span>
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                className="validate"
                onChange={handleChange}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="password"
                type="password"
                className="validate"
                onChange={handleChange}
              />
              <label htmlFor="password">Hasło</label>
            </div>
          </div>

          <div className="submit">
            <button className="btn send">Wyślij</button>
          </div>
          <div className="forgot-password">
            <span>
              Zapomniałeś hasła? <span onClick={handleReset}>Odzyskaj</span>
            </span>
          </div>
          <div className="red-text center">
            {authError ? <span>{authError}</span> : null}
          </div>
        </form>
      </div>
    </LoginDiv>
  );
}

export default Login;
