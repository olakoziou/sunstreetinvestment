import oldCasesReducer from './oldCasesReducer';
import propertiesReducer from './propertiesReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  oldCases: oldCasesReducer,
  properties: propertiesReducer
});

export default rootReducer;
