import { TodosActions, TodosState } from "types";

const initialState: TodosState = {
  todoList: [
    {
      id: 1,
      isCompleted: false,
      todo_title: "todo1",
      todo_description: "description",
    },
    {
      id: 2,
      isCompleted: true,
      todo_title: "todo2",
      todo_description: "description",
    },
    {
      id: 3,
      isCompleted: false,
      todo_title: "todo3",
      todo_description: "description",
    },
  ],
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
