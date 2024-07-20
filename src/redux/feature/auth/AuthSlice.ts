import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {
  showAuthPage: true,
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    
  }
})
export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;