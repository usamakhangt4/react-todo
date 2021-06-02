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

  const [todo, setTodo] = useState("");

  const onSubmit = useCallback(() => {
    dispatch(
      addTodo({
        id: todoList.length + 1,
        isCompleted: false,
        todo_title: todo,
      })
    );
    setTodo("");
  }, [dispatch, todo, todoList.length]);

  return (
    <section className="add-todo-form main-container">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="todo-title"
      />
      <button
        onClick={() => onSubmit()}
        className={`button ${todo.trim().length <= 0 ? "disabled" : null}`}>
        <span className="icon">+</span>
        <span>Add</span>
      </button>
    </section>
  );
}
