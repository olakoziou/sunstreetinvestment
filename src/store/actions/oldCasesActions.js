export const addOldProperty = (property) => {
  return (dispatch, getState, { getFirestore }) => {
    const user = getState().firebase.profile;
    const firestore = getFirestore();
    const id = getState().firebase.auth.uid;

    firestore
      .collection('oldCases')
      .add({
        ...property,
        addedBy: `${user.firstName} ${user.lastName}`,
        addedDate: new Date(),
        status: 'created',
      })
      .then(() => {
        dispatch({ type: 'ADD_OLDCASE_SUCCESS', property });
      })
      .catch((err) => {
        dispatch({ type: 'ADD_OLDCASE_ERROR', err });
      });
  };
};

export const addOnWebOldCase = (property) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('oldCases')
      .doc(property.id)
      .update({ status: 'added' })
      .then(() => {
        dispatch({ type: 'ADDONWEB_OLDCASE_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'ADDONWEB_OLDCASE_ERROR', err });
      });
  };
};

export const deleteOldCase = (property) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const user = getState().firebase.profile;

    firestore
      .collection('oldCases')
      .doc(property.id)
      .update({
        status: 'deleted',
        deleteDate: new Date(),
        deletedBy: `${user.firstName} ${user.lastName}`,
      })
      .then(() => {
        dispatch({ type: 'DELETE_OLDCASE_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'DELETE_OLDCASE_ERROR', err });
      });
  };
};

export const setBackOldCase = (property) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('oldCases')
      .doc(property.id)
      .update({ status: 'set back' })
      .then(() => {
        dispatch({ type: 'SETBACK_OLDCASE_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'SETBACK_OLDCASE_ERROR', err });
      });
  };
};

export const editkOldCase = (property) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('oldCases')
      .doc(property.id)
      .update({ ...property, status: 'edited' })
      .then(() => {
        dispatch({ type: 'EDIT_OLDCASE_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'EDIT_OLDCASE_ERROR', err });
      });
  };
};
