import { combineReducers } from '@reduxjs/toolkit';

import userInsurance from './user-insurance/reducer';

const rootReducer = combineReducers({
  userInsurance
})

export default rootReducer;

