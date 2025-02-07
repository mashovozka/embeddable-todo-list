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
import { Toaster, toast } from "sonner";

export default function TodoList() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.todos);

  const isLoading = useSelector((state) => state.todos.isLoading);
  const failedToGetTodos = useSelector((state) => state.todos.failedToGetTodos);
  const showToastError = useSelector((state) => state.todos.showToastError);

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, [dispatch]);

  useEffect(() => {
    if (showToastError) {
      toast.error("Error!");
    }
  }, [dispatch, showToastError]);

  return (
    <TodoListContainer>
      <h1>Todo List</h1>
      <TodoForm />
      <Status />
      {isLoading && <Loader />}
      {failedToGetTodos && <ErrorMessage />}
      <TodoItemsContainer>
        {todos.map((todo, i) => (
          <Todo key={i} todo={todo} />
        ))}
      </TodoItemsContainer>
      <Toaster richColors position="bottom-left" />
    </TodoListContainer>
  );
}
