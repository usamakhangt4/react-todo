import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { setIncrementCount } from "store/actions";

export default function Counter() {
  const dispatch = useDispatch();

  const { count } = useSelector<AppState, AppState["counter"]>(
    (state) => state.counter
  );
  return (
    <div>
      <h1>COUNT :{count} </h1>
      <button onClick={() => dispatch(setIncrementCount(count + 1))}>
        Increment
      </button>
      <button
        onClick={() => dispatch(setIncrementCount(count > 0 ? count - 1 : 0))}>
        Decrement
      </button>
    </div>
  );
}
