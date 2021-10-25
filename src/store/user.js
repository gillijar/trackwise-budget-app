import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: {},
    name: "",
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setUserId(state, action) {
      state.userId = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
