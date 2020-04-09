import { useFirebase } from 'react-redux-firebase';

export const LogIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  };
};

export const SignUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(
        newUser['signup-email'],
        newUser['signup-password']
      )
      .then((resp) => {
        return firestore
          .collection('users')
          .doc(resp.user.uid)
          .set({
            firstName: newUser['signup-first_name'],
            lastName: newUser['signup-last_name'],
            email: newUser['signup-email'],
            description: newUser['signup-textarea1'],
            userImg: newUser.userImg ? newUser.userImg : null,
            fullName: `${newUser['signup-first_name']} ${newUser['signup-last_name']}`,
            status: 'Waiting for confirmation',
            id: resp.user.uid,
          });
      })
      .then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'SIGNUP_ERROR', err });
      });
  };
};

export const LogOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: 'LOGOUT_SUCCESS' });
      });
  };
};
