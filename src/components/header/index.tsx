import { useSelector } from "react-redux";
import { AppState } from "store";

export default function Header() {
  const { todoList = [] } = useSelector<AppState, AppState["todos"]>(
    (state) => state.todos
  );
  const completedTodos = todoList.filter((todo) => todo.isCompleted === true);
  return (
    <header className="header-wrapper main-container">
      <h1>REACT - TODO</h1>
      <h2>Total Todos : {todoList.length}</h2>
      <h2>Completed : {completedTodos.length}</h2>
    </header>
  );
}
