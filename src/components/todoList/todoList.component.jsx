import { Status } from "../Status";
import TodoForm from "../todoForm/todoForm.component";
import Todo from "../todo/todo.component";
import { TodoListContainer, TodoItemsContainer } from "./todoList.styles";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTodos } from "../../store/todos/todos.action";

export default function TodoList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const todos = useSelector((state) => state.todos);

  return (
    <TodoListContainer>
      <h1 className="header">Todo List</h1>
      <TodoForm />
      <TodoItemsContainer>
        {todos.map((todo, i) => (
          <Todo key={i} todo={todo} />
        ))}
      </TodoItemsContainer>
      <button type="submit">add todo</button>
      <Status />
    </TodoListContainer>
  );
}
