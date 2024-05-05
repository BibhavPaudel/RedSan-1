import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullname: "default",
  phone: "00000",
  email: "default@gmail.com",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  //reducers are function used to manuplate the global store
  reducers: {
    //the action wll be the parameter passed while calling the add function(predefined)
    addUser(state, action) {
      state.fullname = action.payload.fullname;
      state.phone = action.payload.phone;
      state.email= action.payload.email;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
