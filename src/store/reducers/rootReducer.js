import oldCasesReducer from './oldCasesReducer';
import propertiesReducer from './propertiesReducer';
import authReducer from './authReducer';
import { combineReducers } from 'redux';
import teamReducer from './teamReaducer';
import userReducer from './userReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  oldCases: oldCasesReducer,
  properties: propertiesReducer,
  team: teamReducer,
  user: userReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
