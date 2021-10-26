import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: {}, // rename data later
    userData: {},
  },
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload;
    },
    setUserData(state, action) {
      state.userData = action.payload;
    },
    logoutUser(state) {
      state.userId = "";
      state.userData = "";
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
