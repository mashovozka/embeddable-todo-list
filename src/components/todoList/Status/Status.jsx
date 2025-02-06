import { useSelector } from "react-redux";
import { StatusContainer } from "./status.styles";

export default function Status() {
  const completedTodos = useSelector((state) => state.todos.completedTodos);
  const inProgressTodos = useSelector((state) => state.todos.inProgressTodos);

  return (
    <StatusContainer>
      <div>In Progress: {inProgressTodos}</div>
      <div>Completed: {completedTodos}</div>
    </StatusContainer>
  );
}
