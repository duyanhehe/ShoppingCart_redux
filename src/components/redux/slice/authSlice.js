import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      const { uid, displayName, email } = action.payload; // Only store necessary fields
      state.user = { uid, displayName, email }; // Save a simpler user object
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    signUpRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    signUpSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      const { uid, displayName, email } = action.payload; // Only store necessary fields
      state.user = { uid, displayName, email }; // Save a simpler user object
    },
    signUpFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const {
  loginRequest,
  loginSuccess,
  loginFailure,
  signUpRequest,
  signUpSuccess,
  signUpFailure,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
