import { createSlice } from '@reduxjs/toolkit';
import { MOCK_USERS } from '../../services/mockData';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isAuthenticated: !!localStorage.getItem('token'),
  role: localStorage.getItem('role') || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      // Intentionally left blank for UI loading state if needed
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.role = action.payload.role;
      localStorage.setItem('user', JSON.stringify(action.payload));
      localStorage.setItem('token', 'mock-jwt-token-12345');
      localStorage.setItem('role', action.payload.role);
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.role = null;
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      localStorage.removeItem('role');
    },
    updateProfile: (state, action) => {
      state.user = { ...state.user, ...action.payload };
      localStorage.setItem('user', JSON.stringify(state.user));
    }
  }
});

export const { loginStart, loginSuccess, logout, updateProfile } = authSlice.actions;
export default authSlice.reducer;
