import { Provider } from "react-redux";
import store from "./store";
import BasicCounter from "./BasicCounter";

export default function BasicCounterWithStore() {
  return (
    <Provider store={store}>
      <BasicCounter />
    </Provider>
  );
}
