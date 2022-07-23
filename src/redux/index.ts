import {
  configureStore,
} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'
import rootReducer from './rootReducer';
import type { AppDispatch } from './interfaces';

const store = configureStore({
  reducer: rootReducer,
});

export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
