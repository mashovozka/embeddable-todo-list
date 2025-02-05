import { nanoid } from "nanoid";
import { useState } from "react";
import { Status } from "./Status";

export default function TodoList() {
  const [value, setValue] = useState("");

  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

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
      <input required type="text" value={value} onChange={handleChange} />
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo.value}</li>
        ))}
      </ul>
      <button type="submit">add todo</button>
      <Status />
    </form>
  );
}
