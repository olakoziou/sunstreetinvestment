import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import imageCompression from 'browser-image-compression';
import { useFirebase } from 'react-redux-firebase';
import { useEffect } from 'react';
import { addNewUser } from '../../../store/actions/userActions';
import { useHistory } from 'react-router';

const AddNewUserDiv = styled.div`
  & .error {
    & a {
      color: inherit;
      font-weight: bold;
    }
  }
`;

function AddNew() {
  const [state, setState] = useState({});
  const [imgState, setImgState] = useState({});
  const dispatch = useDispatch();
  const firebase = useFirebase();
  const storageRef = firebase.storage().ref();
  const history = useHistory();

  const optionsSmallImg = {
    maxSizeMB: 1,
    maxWidthOrHeight: 450,
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
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

  useEffect(() => {
    let timer = setTimeout(() => {
      setState((state) => ({ ...state, imageFormatError: false }));
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [state]);

  // Add main image
  useEffect(() => {
    console.log(state);
    if (state['add-new_first_name'] && state['add-new_last_name']) {
      imgState.userImg.map((image) => {
        storageRef
          .child(
            `team/${state['add-new_first_name']}${state['add-new_last_name']}`
          )
          .put(image)
          .then((url) => {
            url.ref.getDownloadURL().then((url) => {
              setState((state) => ({ ...state, userImg: url }));
            });
          });
      });
    }
  }, [imgState.userImg]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewUser(state));
    history.push('/admin-panel/users');
  };

  const handleDeleteWhiteSpaces = (e) => {
    const deletedSpaces = e.target.value.replace(/\s/g, '');
    setState({ ...state, [e.target.id]: deletedSpaces });
  };
  return (
    <AddNewUserDiv className="add-new">
      <h5 className="title">Dodaj nowego użytkownika (bez opcji logowania)</h5>
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="add-new_first_name"
                type="text"
                className="validate"
                onChange={handleChange}
                required
                onBlur={handleDeleteWhiteSpaces}
              />
              <label htmlFor="add-new_first_name">*Imię</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="add-new_last_name"
                type="text"
                className="validate"
                onChange={handleChange}
                required
                onBlur={handleDeleteWhiteSpaces}
              />
              <label htmlFor="add-new_last_name">*Nazwisko</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="add-new_phone"
                type="number"
                className="validate"
                onChange={handleChange}
                minLength={9}
                maxLength={9}
              />
              <label htmlFor="add-new_phone">Numer służbowy</label>
              <span className="helper-text">
                Widoczny na stronie nieruchomości w kategorii Opiekun oferty
              </span>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="add-new_textarea1"
                className="materialize-textarea"
                onChange={handleChange}
                required
                // minLength={150}
                // maxLength={200}
              ></textarea>
              <label htmlFor="add-new_textarea1">*Opis</label>
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
                disabled={!state['add-new_first_name'] ? true : false}
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
                  rel="noopener noreferrer"
                >
                  stronę
                </a>{' '}
                .
              </p>
            </div>
          ) : null}
          <div className="row">
            <span>*Wymagane</span>
          </div>
          <div className="submit">
            <button className="btn send">Wyślij</button>
          </div>
        </form>
      </div>
    </AddNewUserDiv>
  );
}

export default AddNew;
