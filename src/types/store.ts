export interface CounterState {
  count: number;
}

export type CounterActions = {
  type: "INCREMENT_COUNT";
  payload: CounterState["count"];
};
