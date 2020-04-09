const initialState = {
  authError: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        ...state,
        authError: null
      };
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: action.err.message
      };
    case 'SIGNUP_SUCCESS':
      console.log('signup success');
      return {
        ...state,
        authError: null
      };
    case 'SIGNUP_ERROR':
      console.log(action.err.message);
      return {
        ...state,
        authError: action.err.message
      };
    case 'LOGOUT_SUCCESS': {
      console.log('logout success');
      return state;
    }
    default:
      return state;
  }
};

export default authReducer;
