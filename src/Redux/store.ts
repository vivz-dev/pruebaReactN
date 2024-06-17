/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import authReducer from './Slices/authSlice';
import productReducer from './Slices/productSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;