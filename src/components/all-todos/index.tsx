import Todo from "components/todo";
import AddTodo from "forms/add-todo";
import { useSelector } from "react-redux";
import { AppState } from "store";

export default function AllTodos() {
  const { todoList } = useSelector<AppState, AppState["todos"]>(
    (state) => state.todos
  );

  return (
    <main>
      <AddTodo />
      <section className="todo-list-wrapper">
        {todoList?.map((todo) => (
          <Todo
            id={todo.id}
            isCompleted={todo.isCompleted}
            title={todo.todo_title}
          />
        ))}
      </section>
    </main>
  );
}
