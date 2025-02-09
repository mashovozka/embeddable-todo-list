import { StatusContainer } from "./Status.styles";
import { useAppSelector } from "@src/store/hooks";

const Status = () => {
  const todos = useAppSelector((state) => state.todos.todos);

  const completedTodos = todos.filter((todo) => todo.done).length;
  const inProgressTodos = todos.length - completedTodos;

  return (
    <StatusContainer>
      <div>In Progress: {inProgressTodos}</div>
      <div>Completed: {completedTodos}</div>
    </StatusContainer>
  );
};

export default Status;
