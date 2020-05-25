import React, { useEffect } from 'react';
import styled from 'styled-components';

const SignupDiv = styled.div``;

function Signup({
  storageRef,
  handleChange,
  handleSubmit,
  handleImgChange,
  state,
  imgState,
  setState,
  optionsSmallImg,
}) {
  // Add main image
  useEffect(() => {
    if (
      state['signup-first_name'] &&
      state['signup-last_name'] &&
      imgState.userImg
    ) {
      imgState.userImg.forEach((image) => {
        storageRef
          .child(
            `team/${state['signup-first_name']}${state['signup-last_name']}`
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

  useEffect(() => {
    let timer = setTimeout(() => {
      setState((state) => ({ ...state, imageFormatError: false }));
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [state]);

  const handleDeleteWhiteSpaces = (e) => {
    const deletedSpaces = e.target.value.replace(/\s/g, '');
    setState({ ...state, [e.target.id]: deletedSpaces });
  };

  return (
    <SignupDiv className="signup">
      <span className="title">Załóż konto</span>
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="signup-first_name"
                type="text"
                className="validate"
                onChange={handleChange}
                required
                onBlur={handleDeleteWhiteSpaces}
              />
              <label htmlFor="signup-first_name">*Imię</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="signup-last_name"
                type="text"
                className="validate"
                onChange={handleChange}
                required
                onBlur={handleDeleteWhiteSpaces}
              />
              <label htmlFor="signup-last_name">*Nazwisko</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                id="signup-email"
                type="email"
                className="validate"
                onChange={handleChange}
                required
              />
              <label htmlFor="signup-email">*Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="signup-phone"
                type="number"
                className="validate"
                onChange={handleChange}
                minLength={9}
                maxLength={9}
              />
              <label htmlFor="signup-phone">Numer służbowy</label>
              <span className="helper-text">
                Widoczny na stronie nieruchomości w kategorii Opiekun oferty
              </span>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="signup-password"
                type="password"
                className="validate"
                onChange={handleChange}
                required
              />
              <label htmlFor="signup-password">*Hasło</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="signup-textarea1"
                className="materialize-textarea"
                onChange={handleChange}
                required
                minLength={150}
                maxLength={200}
              ></textarea>
              <label htmlFor="signup-textarea1">*Opis</label>
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
                disabled={!state['signup-first_name'] ? true : false}
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
            <div className="white-text center row error">
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
    </SignupDiv>
  );
}

export default Signup;
