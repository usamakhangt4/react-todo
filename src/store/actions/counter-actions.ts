import { CounterActions, CounterState } from "../../types/store";

export function setIncrementCount(
  payload: CounterState["count"]
): CounterActions {
  return {
    type: "INCREMENT_COUNT",
    payload,
  };
}
