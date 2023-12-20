import * as todosDuck from "./todos/todosSlice";
import * as formDuck from "./form/formSlice";

export const { addTodo, editTodo, removeTodo, ...todosReducer } = todosDuck;

export const { setNewTodoText, resetForm, ...formReducer } = formDuck;
