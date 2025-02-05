export default function Todo({ todo }) {
  return <li key={todo.id}>{todo.value}</li>;
}
