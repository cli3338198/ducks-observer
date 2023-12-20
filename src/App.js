import BasicCounterWithStore from "./basic/BasicCounterWithStore";
import * as TodoApp from "./withDucks/index";

export default function App() {
  return (
    <>
      <BasicCounterWithStore />
      <hr />
      <TodoApp />
    </>
  );
}
