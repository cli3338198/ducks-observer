import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    incrementAmount: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
    incrementIncrementAmount: (state) => {
      state.incrementAmount += 1;
    },
    decrementIncrementAmount: (state) => {
      if (state.incrementAmount > 0) {
        state.incrementAmount -= 1;
      }
    },
    resetIncrementAmount: (state) => {
      state.incrementAmount = 0;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  incrementIncrementAmount,
  decrementIncrementAmount,
  resetIncrementAmount,
} = counterSlice.actions;

const counterReducer = counterSlice.reducer;

export default counterReducer;
