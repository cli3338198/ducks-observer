import { Provider } from "react-redux";
import store from "./store";
import TodoApp from "./TodoApp";

export default function WithStore() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}
