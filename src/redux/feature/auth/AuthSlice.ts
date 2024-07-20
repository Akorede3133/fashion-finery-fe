import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export type AuthState = {
  showAuthPage: boolean
}
const initialState: AuthState = {
  showAuthPage: false,
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    displayAuthPage: (state) => {
      state.showAuthPage = true;
    },
    hideAuthPage: (state) => {
      state.showAuthPage = false;

    }
  }
})

export const { displayAuthPage, hideAuthPage }  = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;