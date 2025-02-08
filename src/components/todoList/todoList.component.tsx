import Status from "../status/status.component";
import TodoForm from "../todoForm/todoForm.component";
import Todo from "../todo/todo.component";
import { TodoListContainer, TodoItemsContainer } from "./todoList.styles";
import { useEffect } from "react";
import { fetchTodosAsync } from "../../store/todos/todos.action";
import Loader from "../loader/loader.component";
import ErrorMessage from "../errorMessage/errorMessage.component";
import { Toaster, toast } from "sonner";
import { useAppSelector, useAppDispatch } from "../../store/hooks";

const TodoList: React.FC = () => {
  const dispatch = useAppDispatch();

  const todos = useAppSelector((state) => state.todos.todos);
  const isLoading = useAppSelector((state) => state.todos.isLoading);
  const failedToGetTodos = useAppSelector(
    (state) => state.todos.failedToGetTodos
  );
  const showToastError = useAppSelector((state) => state.todos.showToastError);

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, [dispatch]);

  useEffect(() => {
    if (showToastError) {
      toast.error("Error!");
    }
  }, [showToastError]);

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
};

export default TodoList;
