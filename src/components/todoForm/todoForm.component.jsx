import { useState } from "react";
import { useDispatch } from "react-redux";
import { NewTodoForm } from "./todoForm.styles";
import { nanoid } from "nanoid";
import { addTodoAsync } from "../../store/todos/todos.action";

export default function TodoForm() {
  const dispatch = useDispatch();

  const [formField, setFormField] = useState("");

  const handleChange = (e) => {
    setFormField(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: nanoid(),
      value: formField,
      isComplete: false,
      createdAt: Date.now(),
    };

    dispatch(addTodoAsync(newTodo));
    setFormField("");
  };

  return (
    <NewTodoForm onSubmit={handleSubmit}>
      <input
        id="task"
        placeholder="write new todo"
        required
        type="text"
        name="task"
        value={formField}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </NewTodoForm>
  );
}
