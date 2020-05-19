import React from 'react';
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
import ForgotPassword from './ForgotPassword';
import imageCompression from 'browser-image-compression';

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
    .signup,
    .reset-password {
      border: 1px solid rgba(${colors.secondary6});
      border-radius: 4px;
      width: 90%;
      margin: 5rem auto;
      padding: 1rem;
      background-color: rgba(${colors.secondary4}, 0.025);
      ${boxShadows('xsmall')};
      position: relative;

      @media ${mediaQueries('phone')} {
        width: 75%;
        max-width: 30rem;
      }

      & .error {
        & a {
          color: inherit;
          font-weight: bold;
        }
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

      & .forgot-password {
        padding: 1rem 0.5rem;

        & span {
          & span {
            color: rgba(${colors.secondary6});
            cursor: pointer;
          }
        }
      }
    }
    & .reset-password {
      & .close {
        position: absolute;
        top: 5%;
        right: 5%;
        cursor: pointer;
        color: rgba(${colors.secondary5});
      }
    }
  }
`;

function LogInPanel() {
  const auth = useSelector((state) => state.firebase.auth);
  const firebase = useFirebase();
  const storageRef = firebase.storage().ref();
  const [state, setState] = useState({});
  const [resetPassword, displayResetPassword] = useState({ display: false });
  const [imgState, setImgState] = useState({});
  const dispatch = useDispatch();

  if (auth.uid) {
    return <Redirect to="/admin-panel/" />;
  }

  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  const optionsSmallImg = {
    maxSizeMB: 1,
    maxWidthOrHeight: 450,
  };

  const handleImgChange = (size) => (e) => {
    e.persist();
    const files = [];
    const upload = Array.from(e.target.files);
    const webp = [];

    upload.forEach((el) => {
      if (el.type === 'image/webp') {
        webp.push(el);
      } else {
        setState((state) => ({ ...state, imageFormatError: true }));
      }
    });

    webp.forEach((file) => {
      imageCompression(file, size)
        .then(function (compressedFile) {
          console.log(`compressedFile size ${compressedFile.size} MB`); // smaller than maxSizeMB
          files.push(compressedFile);
        })
        .then(() => {
          files.forEach((file) => {
            setImgState({
              ...imgState,
              [e.target.id]: [file],
            });
          });
        })
        .catch(function (error) {
          console.log(error.message);
        });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SignUp(state));
  };

  return (
    <LogInPanelSection className="login-panel">
      <div className="login-panel__wrapper">
        {auth.isLoaded && (
          <Login
            resetPassword={resetPassword}
            displayResetPassword={displayResetPassword}
          />
        )}
        {auth.isLoaded && resetPassword.display && (
          <ForgotPassword
            resetPassword={resetPassword}
            displayResetPassword={displayResetPassword}
          />
        )}
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
            optionsSmallImg={optionsSmallImg}
          />
        )}
      </div>
    </LogInPanelSection>
  );
}

export default LogInPanel;
