import { useDispatch } from "react-redux";
import "./todo.styles.jsx";
import { TodoContainer } from "./todo.styles";
import { toggleTodoAsync } from "../../store/todos/todos.action";

export default function Todo({ todo }) {
  const dispatch = useDispatch();

  const { value, done } = todo;

  const handleClick = () => {
    dispatch(toggleTodoAsync(todo));
  };

  return (
    <TodoContainer done={done} onClick={handleClick}>
      {value}
    </TodoContainer>
  );
}
