import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export type AuthState = {
  showLoginPage: boolean;
  showRegisterPage: boolean;
  showConfirmEmail: boolean;
  loggedIn: boolean;
  showAccount: boolean;
}
const initialState: AuthState = {
  showLoginPage: false,
  showRegisterPage: false,
  showConfirmEmail: false,
  loggedIn: true,
  showAccount: false,
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    displayLoginPage: (state) => {
      state.showLoginPage = true;
    },
    hideLoginPage: (state) => {
      state.showLoginPage = false;

    },
    displayRegisterPage: (state) => {
      state.showRegisterPage = true;
    },
    hideRegisterPage: (state) => {
      state.showRegisterPage = false;

    },
    displayConfirmEmail: (state) => {
      state.showConfirmEmail = true;
    },
    setShowAccount: (state, {payload }) => {
      state.showAccount = payload;
    }
  }
})
export default authSlice.reducer;

export const { displayLoginPage, hideLoginPage, displayRegisterPage, hideRegisterPage, setShowAccount }  = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;