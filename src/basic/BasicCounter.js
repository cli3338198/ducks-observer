import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementIncrementAmount,
  decrementIncrementAmount,
  resetIncrementAmount,
} from "./counterSlice";

export default function BasicCounter() {
  const { count, incrementAmount } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>This is a basic counter!</h1>
      <div>Counter Value: {count}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <hr />
      <button onClick={() => dispatch(decrementIncrementAmount())}>⬇</button>
      <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
        Increment by {incrementAmount}
      </button>
      <button onClick={() => dispatch(incrementIncrementAmount())}>⬆</button>
      <button onClick={() => dispatch(resetIncrementAmount())}>Reset</button>
    </div>
  );
}
