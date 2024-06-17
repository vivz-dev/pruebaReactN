/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  username: string | null;
  user: any; // Define el tipo de usuario según la estructura real
  attempts: number;
}

const initialState: AuthState = {
  isAuthenticated: false,
  username: null,
  user: null,
  attempts: 0,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ username: string, data: any }>) => {
      state.isAuthenticated = true;
      state.username = action.payload.username;
      state.user = action.payload.data;
      state.attempts = 0;
    },
    incrementAttempts: (state) => {
      state.attempts += 1;
    },
    resetAttempts: (state) => {
      state.attempts = 0;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.attempts = 0;
    },
  },
});

export const { login, incrementAttempts, resetAttempts, logout } = authSlice.actions;

export default authSlice.reducer;
