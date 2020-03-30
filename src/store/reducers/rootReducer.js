import oldCasesReducer from './oldCasesReducer';
import propertiesReducer from './propertiesReducer';
import { combineReducers } from 'redux';
import teamReducer from './teamReaducer';

const rootReducer = combineReducers({
  oldCases: oldCasesReducer,
  properties: propertiesReducer,
  team: teamReducer
});

export default rootReducer;
