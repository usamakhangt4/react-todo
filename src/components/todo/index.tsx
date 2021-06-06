import { useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "store/actions";

interface ComponentProps {
  id: number;
  title: string;
  isCompleted: boolean;
}

export default function Todo(props: ComponentProps) {
  const { id, isCompleted, title } = props;
  const [isDeleted, setIsDeleted] = useState(false);
  const dispatch = useDispatch();

  const [cookies, setCookies] = useCookies();
  const { todoCookies = [] } = cookies;

  const onDelete = (id: number) => {
    setIsDeleted(true);
    setTimeout(() => {
      dispatch(deleteTodo(id));
      setIsDeleted(false);
    }, 300);
    //-------------
    const updatedTodoList = todoCookies.filter(
      (todo: { id: number }) => todo.id !== id
    );
    setCookies("todoCookies", updatedTodoList);
  };

  return (
    <article key={id} className={`todo-card ${isDeleted && "deleted"}`}>
      <input
        type="checkbox"
        name=""
        id=""
        checked={isCompleted}
        onChange={() => dispatch(updateTodo(id))}
        className="chekbox"
      />
      <h2 className={`todo-title ${isCompleted ? "completed" : ""}`}>
        {title}
      </h2>
      <button className="button delete-todo " onClick={() => onDelete(id)}>
        Delete
      </button>
    </article>
  );
}
