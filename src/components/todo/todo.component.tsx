import { toggleTodoAsync } from "../../store/todos/todos.action";
import { useAppDispatch } from "../../store/hooks";
import { ITodo } from "../../types/todo.types";
import { TodoContainer } from "./todo.styles";

const Todo = ({ todo }: { todo: ITodo }) => {
  const dispatch = useAppDispatch();

  const { value, done } = todo;

  const handleClick = () => {
    dispatch(toggleTodoAsync(todo));
  };

  return (
    <TodoContainer done={done} onClick={handleClick}>
      {value}
    </TodoContainer>
  );
};

export default Todo;
