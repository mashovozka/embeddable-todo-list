import Status from "../Status/Status.component";
import TodoForm from "../todoForm/todoForm.component";
import Todo from "../todo/todo.component";
import { TodoListContainer, TodoItemsContainer } from "./todoList.styles";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTodosAsync } from "../../store/todos/todos.action";
import Loader from "../loader/loader.component";
import ErrorMessage from "../errorMessage/errorMessage.component";

export default function TodoList() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.todos);

  const isLoading = useSelector((state) => state.todos.isLoading);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, []);

  return (
    <TodoListContainer>
      <h1>Todo List</h1>
      <TodoForm />
      <Status />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      <TodoItemsContainer>
        {todos.map((todo, i) => (
          <Todo key={i} todo={todo} />
        ))}
      </TodoItemsContainer>
    </TodoListContainer>
  );
}
