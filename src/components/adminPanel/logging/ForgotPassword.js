import React from 'react';
import { useDispatch } from 'react-redux';
import { resetUserPassword } from '../../../store/actions/userActions';

function ForgotPassword({ resetPassword, displayResetPassword }) {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetUserPassword(resetPassword.email));
    displayResetPassword({ display: false });
  };
  const handleChange = (e) => {
    displayResetPassword({ ...resetPassword, email: e.target.value });
  };
  const handleClose = (e) => {
    displayResetPassword({ display: false, email: '' });
  };
  return (
    <div className="reset-password">
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email_reset"
                type="email"
                className="validate"
                onChange={handleChange}
              />
              <label htmlFor="email_reset">Email</label>
              <span className="helper-text">
                Wpisz email podany podczas zakładania konta
              </span>
            </div>
          </div>
          <div className="close" onClick={handleClose}>
            <i className="material-icons">close</i>
          </div>
          <div className="submit">
            <button className="btn send">Wyślij</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
