import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { addTodo } from "store/actions";
import { Todo } from "types";
export default function AddTodo() {
  const dispatch = useDispatch();
  const { todoList = [] } = useSelector<AppState, AppState["todos"]>(
    (state) => state.todos
  );

  const [todo, setTodo] = useState({
    todo_title: "",
    todo_description: "",
  });

  const onSubmit = useCallback(() => {
    dispatch(
      addTodo({
        id: todoList.length + 1,
        isCompleted: false,
        todo_title: todo.todo_title,
        todo_description: todo.todo_description,
      })
    );
  }, [dispatch, todo.todo_description, todo.todo_title, todoList.length]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setTodo({ ...todo, todo_title: e.target.value })}
      />
      <input
        type="text"
        onChange={(e) => setTodo({ ...todo, todo_description: e.target.value })}
      />
      <button onClick={() => onSubmit()}>Add</button>
    </div>
  );
}
