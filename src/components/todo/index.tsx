import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "store/actions";

interface ComponentProps {
  id: number;
  title: string;
  isCompleted: boolean;
}

export default function Todo(props: ComponentProps) {
  const { id, isCompleted, title } = props;
  const dispatch = useDispatch();

  return (
    <article key={id} className="todo-card">
      <input
        type="checkbox"
        name=""
        id=""
        checked={isCompleted}
        onChange={() => dispatch(updateTodo(id))}
        className="chekbox"
      />
      <h2 className={`todo-title ${isCompleted && "completed"}`}>{title}</h2>
      <button
        className="button delete-todo"
        onClick={() => dispatch(deleteTodo(id))}>
        Delete
      </button>
    </article>
  );
}
