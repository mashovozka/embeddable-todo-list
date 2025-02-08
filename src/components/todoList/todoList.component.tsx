import { useEffect } from "react";
import { Toaster, toast } from "sonner";

import Status from "@src/components/status/status.component";
import TodoForm from "@src/components/todoForm/todoForm.component";
import Todo from "@src/components/todo/todo.component";
import Loader from "@src/components/loader/loader.component";
import ErrorMessage from "@src/components/errorMessage/errorMessage.component";

import { fetchTodosAsync } from "@src/store/todos/todos.action";
import { useAppSelector, useAppDispatch } from "@src/store/hooks";

import { TodoListContainer, TodoItemsContainer } from "./todoList.styles";

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
