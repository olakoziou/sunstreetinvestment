import React, { useEffect } from 'react';
import Login from './Login';
import Signup from './Signup';
import styled from 'styled-components';
import { colors } from '../../../colors';
import { boxShadows, mediaQueries } from '../../../mixins';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { useFirebase } from 'react-redux-firebase';
import { SignUp } from '../../../store/actions/authActions';
import { useState } from 'react';

const LogInPanelSection = styled.section`
  min-height: 100vh;
  width: 80%;
  margin: 0 auto;
  padding: 2rem 0;

  & .login-panel__wrapper {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media ${mediaQueries('tab-port')} {
      width: 70%;
    }

    & .login,
    .signup {
      border: 1px solid rgba(${colors.secondary6});
      border-radius: 4px;
      width: 90%;
      margin: 5rem auto;
      padding: 1rem;
      background-color: rgba(${colors.secondary4}, 0.025);
      ${boxShadows('xsmall')};

      @media ${mediaQueries('phone')} {
        width: 75%;
        max-width: 25rem;
      }

      /* label focus color */
      & .input-field input:focus + label,
      .input-field textarea:focus + label {
        color: rgba(${colors.primary5});
      }
      /* label underline focus color */
      & .input-field input:focus,
      .input-field textarea:focus {
        border-bottom: 1px solid rgba(${colors.primary5});
        box-shadow: 0 1px 0 0 rgba(${colors.primary5});
      }

      /* valid color */
      & .input-field input.valid,
      .input-field textarea.valid {
        border-bottom: 1px solid rgba(${colors.primary5}) !important;
        box-shadow: 0 1px 0 0 rgba(${colors.primary5}) !important;
      }
      /* invalid color */
      & .input-field input.invalid,
      .input-field textarea.invalid {
        border-bottom: 1px solid red !important;
        box-shadow: 0 1px 0 0 red !important;
      }
      /* icon prefix focus color */
      & .input-field .prefix.active {
        color: rgba(${colors.primary5});
      }

      & span.title {
        display: block;
        text-align: center;
        font-size: 1.4rem;
        color: rgba(${colors.secondary6});
        text-transform: uppercase;
        padding: 1.2em 0;
      }

      & .send,
      .file {
        background-color: rgba(${colors.primary4});
        margin: 0 auto;

        &:hover {
          background-color: rgba(${colors.primary5});
        }
      }

      & .send {
        width: 100%;
      }
    }
  }
`;

function LogInPanel() {
  const auth = useSelector((state) => state.firebase.auth);
  const firebase = useFirebase();
  const storageRef = firebase.storage().ref();
  const [state, setState] = useState({});
  const [imgState, setImgState] = useState({});
  const dispatch = useDispatch();

  if (auth.uid) {
    return <Redirect to="/admin-panel/" />;
  }

  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const handleImgChange = (e) => {
    const files = [];
    const upload = Array.from(e.target.files);
    upload.map((img) => files.push(img));
    setImgState({
      ...imgState,
      [e.target.id]: files,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SignUp(state));
  };

  return (
    <LogInPanelSection className="login-panel">
      <div className="login-panel__wrapper">
        {auth.isLoaded && <Login />}
        {auth.isLoaded && (
          <Signup
            firebase={firebase}
            storageRef={storageRef}
            handleSubmit={handleSubmit}
            handleImgChange={handleImgChange}
            handleChange={handleChange}
            state={state}
            imgState={imgState}
            setState={setState}
          />
        )}
      </div>
    </LogInPanelSection>
  );
}

export default LogInPanel;
