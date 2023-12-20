import { useDispatch, useSelector } from "react-redux";

export default function TodoApp() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <div>Todo App</div>
    </>
  );
}
