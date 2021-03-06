const initialState = {
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USERCONFIRMED_SUCCESS':
      console.log('USERCONFIRMED_SUCCESS');
      return {
        ...state,
        error: null,
      };
    case 'USERCONFIRMED_ERROR':
      console.log('USERCONFIRMED_ERROR');
      console.log(action.err);
      return {
        ...state,
        error: action.err,
      };
    case 'USERDELETED_SUCCESS':
      console.log('USERDELETED_SUCCESS');
      return {
        ...state,
        error: null,
      };
    case 'USERCDELETED_ERROR':
      console.log('USERDELETED_ERROR');
      console.log(action.err);
      return {
        ...state,
        error: action.err,
      };
    case 'CHANGEEMAIL_SUCCESS':
      console.log('CHANGEEMAIL_SUCCESS');
      return {
        ...state,
        error: null,
      };
    case 'CHANGEEMAIL_ERROR':
      console.log('CHANGEEMAIL_ERROR');
      console.log(action.err);
      return {
        ...state,
        error: action.err,
      };
    case 'USEREDITED_SUCCESS':
      console.log('USEREDITED_SUCCESS');
      return {
        ...state,
        error: null,
      };
    case 'USEREDITED_ERROR':
      console.log('USEREDITED_ERROR');
      console.log(action.err);
      return {
        ...state,
        error: action.err,
      };
    case 'USERREAUTH_SUCCESS':
      console.log('USERREAUTH_SUCCESS');
      return {
        ...state,
        error: null,
      };
    case 'USERREAUTH_ERROR':
      console.log('USERREAUTH_ERROR');
      console.log(action.err);
      return {
        ...state,
        error: action.err,
      };
    case 'RESET_SUCCESS':
      console.log('RESET_SUCCESS');
      return {
        ...state,
        error: null,
      };
    case 'RESET_ERROR':
      console.log('RESET_ERROR');
      console.log(action.err);
      return {
        ...state,
        error: action.err,
      };
    case 'ADD_NEW_USER_SUCCESS':
      console.log('ADD_NEW_USER_SUCCESS');
      return {
        ...state,
        error: null,
      };
    case 'ADD_NEW_USER_ERROR':
      console.log('ADD_NEW_USER_ERROR');
      console.log(action.err);
      return {
        ...state,
        error: action.err,
      };
    case 'ADUSERHARDDELETEUCCESS':
      console.log('USERHARDDELETE_SUCCESS');
      return {
        ...state,
        error: null,
      };
    case 'USERHARDDELETE_ERROR':
      console.log('USERHARDDELETE_ERROR');
      console.log(action.err);
      return {
        ...state,
        error: action.err,
      };
    default:
      return state;
  }
};

export default userReducer;
