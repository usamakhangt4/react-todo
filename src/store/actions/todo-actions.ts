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

export function updateTodo(id: number) {
  return (dispatch: any, getState: GetState) => {
    const {
      todos: { todoList = [] },
    } = getState();

    const updatedList = todoList.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });

    dispatch(setTodo(updatedList));
  };
}

export function deleteTodo(id: number) {
  return (dispatch: any, getState: GetState) => {
    const {
      todos: { todoList = [] },
    } = getState();

    const updatedList = todoList.filter((todo) => todo.id !== id);
    dispatch(setTodo(updatedList));
  };
}
