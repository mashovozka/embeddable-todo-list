import { nanoid } from "nanoid";
import { useState } from "react";
import { Status } from "../Status";
import TodoForm from "../todoForm/todoForm.component";
import Todo from "../todo/todo.component";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    setTodos([
      ...todos,
      {
        id: nanoid(),
        value: e.target.value,
        done: false,
        createdAt: Date.now(),
      },
    ]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TodoForm />
      <ul>
        {todos.map((todo, i) => (
          <Todo key={i} todo={todo} />
        ))}
      </ul>
      <button type="submit">add todo</button>
      <Status />
    </form>
  );
}
