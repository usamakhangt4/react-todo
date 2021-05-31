import { Dispatch } from "react";
import { GetState, Todo, TodosActions, TodosState } from "types";

export function setTodo(payload: TodosState["todoList"]): TodosActions {
  return {
    type: "SET_Todo",
    payload,
  };
}

export function addTodo(todo: Todo) {
  return (dispatch: any, getState: GetState) => {
    const {
      todos: { todoList = [] },
    } = getState();
    dispatch(setTodo([todo, ...todoList]));
  };
}
