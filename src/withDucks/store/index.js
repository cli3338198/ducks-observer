import { formReducer, todosReducer } from "../features";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    form: formReducer,
  },
});

export default store;
