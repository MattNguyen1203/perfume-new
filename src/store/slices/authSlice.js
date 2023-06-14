import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: !!localStorage.getItem("token"),
  },
  reducers: {},
});

const { reducer, actions } = authSlice;
export const {} = actions;
export default reducer;
