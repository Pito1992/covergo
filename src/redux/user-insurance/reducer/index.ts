import { createReducer } from '@reduxjs/toolkit'
import { submitUserInformation, clearUserInformation } from '../actions';
import type { IUserInsuranceState } from './interfaces';
import type { IUserInformationData } from '../actions/interfaces';

export const initialState: IUserInsuranceState = {
  data: {} as IUserInformationData, 
};

const userInsuranceReducer = createReducer(initialState, (builder) => {
  builder.addCase(submitUserInformation, (state, action) => {
    state.data = action.payload;
  })
  builder.addCase(clearUserInformation, (state) => {
    state.data = {} as IUserInformationData;
  })
})

export default userInsuranceReducer;
