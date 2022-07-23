import { createAction } from '@reduxjs/toolkit';
import {
  SUBMIT_USER_INFORMATION,
  CLEAR_USER_INFORMATION
} from '../../../constants/actionTypes';
import type { FormValues } from '../../../pages/Introduction/interfaces';
import type { IUserInformationData } from './interfaces';

export const submitUserInformation = createAction(SUBMIT_USER_INFORMATION, (values: FormValues): Record<'payload', IUserInformationData> => {
  return {
    payload: {
      name: values.name,
      age: +values.age,
      package: values.package,
      country: values.country.value
    }
  }
})

export const clearUserInformation = createAction(CLEAR_USER_INFORMATION)
