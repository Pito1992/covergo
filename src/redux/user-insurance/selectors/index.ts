import { createSelector } from '@reduxjs/toolkit';
import type { IUserInsuranceState } from '../reducer/interfaces';
import type { IUserInformationData } from '../actions/interfaces';
import type { RootState } from '../../interfaces';

export const userInsuranceSelector = (state: RootState): IUserInsuranceState => state.userInsurance;

export const getUserInformationData = createSelector(
  userInsuranceSelector,
  ({ data }: IUserInsuranceState): IUserInformationData => data,
)
