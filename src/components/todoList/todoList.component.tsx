import { useEffect } from "react";

import Status from "@src/components/Status/status.component";
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

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, [dispatch]);

  return (
    <TodoListContainer>
      <h1>Todo List</h1>

      <TodoForm />
      <Status />

      {isLoading && <Loader />}
      {failedToGetTodos && <ErrorMessage />}

      <TodoItemsContainer>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </TodoItemsContainer>
    </TodoListContainer>
  );
};

export default TodoList;
