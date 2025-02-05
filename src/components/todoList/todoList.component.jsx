import { useEffect, useState } from "react";
import { Status } from "../Status";
import TodoForm from "../todoForm/todoForm.component";
import Todo from "../todo/todo.component";
import { TodoListContainer, TodoItemsContainer } from "./todoList.styles";

const todosMap = [
  {
    id: "yRTKiDy0-s_9zrh0zAMaK",
    value: "learn react",
    done: true,
    createdAt: 1650802513913,
  },
  {
    id: "Ia4t6uQ-op5aq4Hbt14qd",
    value: "lear redux",
    done: true,
    createdAt: 1650804005530,
  },
  {
    id: "uzj6QITRsvnMMmHAlv0nJ",
    value: "fix my robot :D",
    done: false,
    createdAt: 1650804402054,
  },
];

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((r) => r.json())
      .then((todos) => {
        console.log("todos", todos);
        setTodos(todos);
      });
  }, []);

  return (
    <TodoListContainer>
      <h1 className="header">Todo List</h1>
      <TodoForm />
      <TodoItemsContainer>
        {todosMap.map((todo, i) => (
          <Todo key={i} todo={todo} />
        ))}
      </TodoItemsContainer>
      <button type="submit">add todo</button>
      <Status />
    </TodoListContainer>
  );
}
