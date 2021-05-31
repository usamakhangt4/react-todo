import Todo from "components/todo";
import AddTodo from "forms/add-todo";
import { useSelector } from "react-redux";
import { AppState } from "store";

export default function AllTodos() {
  const { todoList } = useSelector<AppState, AppState["todos"]>(
    (state) => state.todos
  );

  const checkboxClicked = (todoId: number) => {
    alert(todoId);
  };
  return (
    <main>
      <AddTodo />
      {todoList?.map((todo) => (
        <article key={todo.id}>
          <input
            type="checkbox"
            name=""
            id=""
            checked={todo.isCompleted}
            onChange={(e) => console.log(e)}
          />
          <h2>{todo.todo_title}</h2>
          <p>{todo.todo_description}</p>
        </article>
      ))}
      <Todo />
    </main>
  );
}
