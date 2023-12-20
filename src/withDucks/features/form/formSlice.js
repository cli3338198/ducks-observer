import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    newTodoText: "",
  },
  reducers: {
    setNewTodoText: (state, action) => {
      state.newTodoText = action.payload.newTodoText;
    },
    resetForm: (state) => {
      state.newTodoText = "";
    },
  },
});

export const { setNewTodoText, resetForm } = formSlice.actions;

export default formSlice.reducer;
