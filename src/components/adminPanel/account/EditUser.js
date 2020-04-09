import React from 'react';
import Signup from '../logging/Signup';
import { useState } from 'react';
import UserAccount from './UserAccount';
import { useDispatch } from 'react-redux';
import { editUser } from '../../../store/actions/userActions';
import { useHistory } from 'react-router';

function EditUser(props) {
  const [state, setState] = useState(props.location.state);
  const emailForAuthEdit = props.location.state.email;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editUser(state, emailForAuthEdit));
    history.push('/admin-panel/account');
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };
  const handleImgChange = (e) => {};
  const handleEdit = (e) => {};
  return (
    <div className="edit-user">
      <UserAccount />
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
                defaultValue={state && state.number}
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
                onChange={handleImgChange}
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
    </div>
  );
}

export default EditUser;
