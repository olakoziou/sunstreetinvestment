export const addNewProperty = (property) => {
  return (dispatch, getState, { getFirestore }) => {
    const user = getState().firebase.profile;
    const firestore = getFirestore();

    firestore
      .collection('properties')
      .add({
        ...property,
        addedBy: `${user.firstName} ${user.lastName}`,
        addedDate: new Date(),
        status: 'created',
      })
      .then(() => {
        dispatch({ type: 'ADD_NEW_PROPERTY_SUCCESS', property });
      })
      .catch((err) => {
        dispatch({ type: 'ADD_NEW_PROPERTY_ERROR', err });
      });
  };
};

export const addOnWeb = (property) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('properties')
      .doc(property.id)
      .update({ status: 'added' })
      .then(() => {
        dispatch({ type: 'ADDONWEB_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'ADDONWEB_ERROR', err });
      });
  };
};

export const deleteProperty = (property) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const user = getState().firebase.profile;

    firestore
      .collection('properties')
      .doc(property.id)
      .update({
        status: 'deleted',
        deleteDate: new Date(),
        deletedBy: `${user.firstName} ${user.lastName}`,
      })
      .then(() => {
        dispatch({ type: 'DELETE_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'DELETE_ERROR', err });
      });
  };
};

export const setBackProperty = (property) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('properties')
      .doc(property.id)
      .update({ status: 'set back', addedDate: new Date() })
      .then(() => {
        dispatch({ type: 'SETBACK_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'SETBACK_ERROR', err });
      });
  };
};

export const editProperty = (property) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('properties')
      .doc(property.id)
      .update({ ...property, status: 'edited', addedDate: new Date() })
      .then(() => {
        dispatch({ type: 'EDIT_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'EDIT_ERROR', err });
      });
  };
};

export const hardDelete = (property) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection('properties')
      .doc(property.id)
      .delete()
      .then(() => {
        dispatch({ type: 'HARDDELETE_SUCCESS' });
      })
      .catch((err) => {
        dispatch({ type: 'HARDDELETE_ERROR', err });
      });
  };
};
