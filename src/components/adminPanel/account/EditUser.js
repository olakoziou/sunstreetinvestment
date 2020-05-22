import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editUser } from '../../../store/actions/userActions';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { useFirebase } from 'react-redux-firebase';
import imageCompression from 'browser-image-compression';

const EditUserDiv = styled.div`
  & .error {
    & a {
      color: inherit;
      font-weight: bold;
    }
  }
  & .img {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 15rem;
    height: 8rem;
    position: relative;

    & .close {
      position: absolute;
      top: 5%;
      right: 5%;
      cursor: pointer;
    }
  }
`;

function EditUser(props) {
  const [state, setState] = useState(props.location.state);
  const [imgState, setImgState] = useState({});
  const emailForAuthEdit = props.location.state.email;
  const dispatch = useDispatch();
  const history = useHistory();
  const firebase = useFirebase();
  const storageRef = firebase.storage().ref();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser(state, emailForAuthEdit));
    history.push('/admin-panel/account');
  };
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

    webp.map((file) => {
      imageCompression(file, size)
        .then(function (compressedFile) {
          // console.log(`compressedFile size ${compressedFile.size} MB`); // smaller than maxSizeMB
          files.push(compressedFile);
        })
        .then(() => {
          files.map((file) => {
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

  // Add main image
  useEffect(() => {
    if (state.firstName && state.lastName && imgState.userImg) {
      imgState.userImg.map((image) => {
        storageRef
          .child(`team/${state.firstName}${state.lastName}-${uuidv4()}`)
          .put(image)
          .then((url) => {
            url.ref.getDownloadURL().then((url) => {
              setState((state) => ({ ...state, userImg: url }));
            });
          });
      });
    }
  }, [imgState.userImg]);

  const handleRemoveImg = (e) => {
    const currentImgUrl = e.target.parentElement.parentElement.style.backgroundImage
      .slice(4, -1)
      .replace(/"/g, '');

    setState({ ...state, userImg: null });
  };

  const handleEdit = (e) => {};
  return (
    <EditUserDiv className="edit-user">
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="firstName"
                type="text"
                className="validate"
                onChange={handleChange}
                required
                defaultValue={state && state.firstName}
              />
              <label className="active" htmlFor="firstName">
                *Imię
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="lastName"
                type="text"
                className="validate"
                onChange={handleChange}
                required
                defaultValue={state && state.lastName}
              />
              <label className="active" htmlFor="lastName">
                *Nazwisko
              </label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                className="validate"
                onChange={handleChange}
                required
                defaultValue={state && state.email}
              />
              <label className="active" htmlFor="email">
                *Email
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="password"
                type="password"
                className="validate"
                onChange={handleChange}
                required
                defaultValue={state && state.password}
              />
              <label className="active" htmlFor="password">
                *Hasło
              </label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="phone"
                type="number"
                className="validate"
                onChange={handleChange}
                minLength={9}
                maxLength={9}
                defaultValue={state && state.phone}
              />
              <label className="active" htmlFor="phone">
                Numer służbowy
              </label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="description"
                className="materialize-textarea"
                onChange={handleChange}
                required
                minLength={150}
                maxLength={200}
                defaultValue={state && state.description}
              ></textarea>
              <label className="active" htmlFor="description">
                *Opis
              </label>
              <span
                className="helper-text"
                data-error="wrong"
                data-success="right"
              >
                150-200 znaków
              </span>
            </div>
          </div>
          <div className="file-field input-field">
            <div className="btn file">
              <span>Zdjęcie</span>
              <input
                type="file"
                onChange={handleImgChange(optionsSmallImg)}
                // disabled={!state['firstName'] ? true : false}
                id="userImg"
              />
            </div>
            <div className="file-path-wrapper">
              <input
                className="file-path validate"
                type="text"
                onChange={handleChange}
              />
            </div>
          </div>
          {state.imageFormatError ? (
            <div className="red-text center row error">
              {' '}
              <p>
                Użyj zdjęcia w formacie .webp. Przejdź na{' '}
                <a
                  href="https://image.online-convert.com/convert-to-webp"
                  target="_blank"
                >
                  stronę
                </a>{' '}
                .
              </p>
            </div>
          ) : null}
          {state.userImg ? (
            <div
              className="img"
              style={{ backgroundImage: `url(${state.userImg})` }}
            >
              <div className="close" onClick={handleRemoveImg}>
                <i className="material-icons">close</i>
              </div>
            </div>
          ) : null}
          <div className="row">
            <span>*Wymagane</span>
          </div>
          <div className="submit">
            <button className="btn send" onSubmit={handleEdit}>
              Zatwierdź
            </button>
          </div>
        </form>
      </div>
    </EditUserDiv>
  );
}

export default EditUser;
