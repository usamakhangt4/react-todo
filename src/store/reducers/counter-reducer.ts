import { CounterActions, CounterState } from "../../types/store";

const initialState: CounterState = {
  count: 0,
};

export default function increment(
  state: CounterState = initialState,
  action: CounterActions
): CounterState {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return { ...state, count: action.payload };

    default:
      return state;
  }
}
