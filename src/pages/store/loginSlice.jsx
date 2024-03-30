import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
  },
});

export const { add } = loginSlice.actions;
export default loginSlice.reducer;
