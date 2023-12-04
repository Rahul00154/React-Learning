import { createSlice } from "@reduxjs/toolkit";

export const showSlice = createSlice({
  name: "show",
  initialState: {
    value: 2,
  },
  reducers: {
    //it take two param one is state,and another is action
    showData: (state) => {
      return (state.value = state.value + 1);
    },
    increment: (state) => {
      state.value = state.value + 1;
    },
    incrementbyValue: (state, action) => {
      // action is data that users send
      //to use that data we use action.payload
      state.value = state.value + action.payload;
    },
    //this is known as action
  },
});

export const { showData, increment, incrementbyValue } = showSlice.actions;
export default showSlice.reducer;
