import "./todo.styles.jsx";
import { TodoContainer } from "./todo.styles";

export default function Todo({ todo }) {
  return <TodoContainer key={todo.id}>{todo.value}</TodoContainer>;
}
