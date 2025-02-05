import { useState } from "react";
import { NewTodoForm } from "./todoForm.styles";

export default function TodoForm() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    // setTodos([
    //   ...todos,
    //   {
    //     id: nanoid(),
    //     value: e.target.value,
    //     done: false,
    //     createdAt: Date.now(),
    //   },
    // ]);
  };

  return (
    <NewTodoForm onSubmit={handleSubmit}>
      <label htmlFor="task">New Todo:</label>
      <input
        id="task"
        placeholder="write new todo"
        required
        type="text"
        name="task"
        value={value}
        onChange={handleChange}
      />
    </NewTodoForm>
  );
}
