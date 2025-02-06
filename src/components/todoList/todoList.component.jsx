import Status from "./Status/Status";
import TodoForm from "../todoForm/todoForm.component";
import Todo from "../todo/todo.component";
import { TodoListContainer, TodoItemsContainer } from "./todoList.styles";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { getTodos } from "../../store/todos/todos.action";

export default function TodoList() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.todos);

  const countRef = useRef(todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [countRef, dispatch]);

  return (
    <TodoListContainer>
      <h1 className="header">Todo List</h1>
      <TodoForm />
      <Status />
      <TodoItemsContainer>
        {todos.map((todo, i) => (
          <Todo key={i} todo={todo} />
        ))}
      </TodoItemsContainer>
      {/* <button type="submit">add todo</button> */}
    </TodoListContainer>
  );
}
