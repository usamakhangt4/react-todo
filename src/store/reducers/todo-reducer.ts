import { TodosActions, TodosState } from "types";

const initialState: TodosState = {
  todoList: [],
};

export default function todoReducer(
  state: TodosState = initialState,
  action: TodosActions
): TodosState {
  switch (action.type) {
    case "SET_Todo":
      return { ...state, todoList: action.payload };

    default:
      return state;
  }
}
