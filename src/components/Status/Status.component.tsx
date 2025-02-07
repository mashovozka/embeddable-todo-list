import { StatusContainer } from "./status.styles";
import { useAppSelector } from "../../store/hooks";

const Status = () => {
  const completedTodos = useAppSelector((state) => state.todos.completedTodos);
  const inProgressTodos = useAppSelector(
    (state) => state.todos.inProgressTodos
  );

  return (
    <StatusContainer>
      <div>In Progress: {inProgressTodos}</div>
      <div>Completed: {completedTodos}</div>
    </StatusContainer>
  );
};

export default Status;
