import { AppState } from "store";

export type GetState = () => AppState;

export type Todo = {
  id: number;
  isCompleted: boolean;
  todo_title: string;
};
export interface TodosState {
  todoList?: Todo[];
}

export type TodosActions =
  | { type: "SET_Todo"; payload: TodosState["todoList"] }
  | {
      type: "UPDATE_INTIAL_TODOLIST";
      payload: TodosState["todoList"];
    };
