export const addNewProperty = property => {
  return (dispatch, getState) => {
    dispatch({ type: 'ADD_NEW_PROPERTY', property });
  };
};
