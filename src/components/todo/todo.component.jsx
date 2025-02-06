import { useDispatch } from "react-redux";
import "./todo.styles.jsx";
import { TodoContainer } from "./todo.styles";
import { TODOS_ACTION_TYPES } from "../../store/todos/todos.action";

export default function Todo({ todo }) {
  const dispatch = useDispatch();

  const { value, isComplete } = todo;

  const toggleComplete = () => {
    dispatch({
      type: TODOS_ACTION_TYPES.TOGGLE_COMPLETE_TODO,
      payload: todo,
    });
  };

  return (
    <TodoContainer isComplete={isComplete} onClick={toggleComplete}>
      {value}
    </TodoContainer>
  );
}
