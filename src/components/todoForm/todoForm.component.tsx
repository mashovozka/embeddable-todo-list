import { useState } from "react";
import { nanoid } from "nanoid";
import { useAppDispatch } from "@src/store/hooks";
import { addTodoAsync } from "@src/store/todos/todos.action";
import { ITodo } from "@src/types/todo.types";
import { NewTodoForm } from "./todoForm.styles";

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
      <div>
        <label htmlFor="task">New Todo</label>
        <input
          id="task"
          placeholder="write new todo"
          required
          type="text"
          name="task"
          value={formField}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add</button>
    </NewTodoForm>
  );
}
