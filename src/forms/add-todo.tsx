import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { AppState } from "store";
import {
  addTodo,
  setInitialTodoList,
  updateInitialTodoList,
} from "store/actions";

export default function AddTodo() {
  const [cookies, setCookies] = useCookies();
  const { todoCookies = [] } = cookies;
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const { todoList = [] } = useSelector<AppState, AppState["todos"]>(
    (state) => state.todos
  );

  const onSubmit = useCallback(() => {
    const newTodo = {
      id: todoList.length + 1,
      isCompleted: false,
      todo_title: todo,
    };
    dispatch(addTodo(newTodo));
    setCookies("todoCookies", [newTodo, ...todoList]);
    setTodo("");
  }, [dispatch, setCookies, todo, todoList]);

  useEffect(() => {
    dispatch(updateInitialTodoList(todoCookies));
  }, []);

  return (
    <section className="add-todo-form main-container">
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="todo-title"
        placeholder="Enter desired task..."
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
