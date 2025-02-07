import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { NewTodoForm } from "./todoForm.styles";
import { nanoid } from "nanoid";
import { addTodoAsync } from "../../store/todos/todos.action";
import { ITodo } from "../../types/todo.types";

export default function TodoForm() {
  const dispatch = useAppDispatch();

  const [formField, setFormField] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormField(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const newTodo: ITodo = {
      id: nanoid(),
      value: formField,
      done: false,
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
