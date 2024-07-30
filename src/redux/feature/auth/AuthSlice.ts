import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type AuthState = {
  showLoginPage: boolean;
  showRegisterPage: boolean;
  showConfirmEmail: boolean;
}
const initialState: AuthState = {
  showLoginPage: false,
  showRegisterPage: false,
  showConfirmEmail: true
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
    }
  }
})

export const { displayLoginPage, hideLoginPage, displayRegisterPage, hideRegisterPage }  = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;