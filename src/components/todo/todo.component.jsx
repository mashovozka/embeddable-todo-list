import { useDispatch } from "react-redux";
import "./todo.styles.jsx";
import { TodoContainer } from "./todo.styles";
import { toggleTodoAsync } from "../../store/todos/todos.action";

export default function Todo({ todo }) {
  const dispatch = useDispatch();

  const { value, isComplete } = todo;

  const handleClick = () => {
    dispatch(toggleTodoAsync(todo));
  };

  return (
    <TodoContainer isComplete={isComplete} onClick={handleClick}>
      {value}
    </TodoContainer>
  );
}
