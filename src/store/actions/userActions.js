export const confirmUser = (user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('users')
      .doc(user.id)
      .update({ status: 'Confirmed' })
      .then(() => {
        dispatch({ type: 'USERCONFIRMED_SUCCES' });
      })
      .catch((err) => {
        dispatch({ type: 'USERCONFIRMED_ERROR', err });
      });
  };
};

export const deleteUser = (user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('users')
      .doc(user.id)
      .update({ status: 'Deleted' })
      .then(() => {
        dispatch({ type: 'USERDELETED_SUCCES' });
      })
      .catch((err) => {
        dispatch({ type: 'USERDELETED_ERROR', err });
      });
  };
};

export const editUser = (userEdit, emailForAuthEdit) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const firebase = getFirebase();
    const user = firebase.auth().currentUser;

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var cred = firebase.auth.EmailAuthProvider.credential(
          emailForAuthEdit,
          userEdit.password
        );
        user
          .reauthenticateWithCredential(cred)
          .then(function () {
            dispatch({ type: 'USERREAUTH_SUCCESS' });
          })
          .catch(function (err) {
            dispatch({ type: 'USERREAUTH_ERROR', err });
          });
      }
    });

    // Prompt the user to re-provide their sign-in credentials

    user
      .updateEmail(userEdit.email)
      .then(() => {
        dispatch({ type: 'CHANGEEMAIL_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'CHANGEEMAIL_ERROR', err });
      });

    firestore
      .collection('users')
      .doc(userEdit.id)
      .update({
        description: userEdit.description,
        email: userEdit.email,
        firstName: userEdit.firstName,
        lastName: userEdit.lastName,
        userImg: userEdit.userImg ? userEdit.userImg : null,
      })
      .then(() => {
        dispatch({ type: 'USEREDITED_SUCCES' });
      })
      .catch((err) => {
        dispatch({ type: 'USEREDITED_ERROR', err });
      });
  };
};

export const resetUserPassword = (email) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const user = firebase.auth().currentUser;

    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function () {
        dispatch({ type: 'RESET_SUCCESS' });
      })
      .catch(function (err) {
        dispatch({ type: 'RESET_ERROR', err });
      });
  };
};
