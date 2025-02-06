import { memo } from "react";
import Status from "../Status/Status.component";
import TodoForm from "../todoForm/todoForm.component";
import Todo from "../todo/todo.component";
import { TodoListContainer, TodoItemsContainer } from "./todoList.styles";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTodos } from "../../store/todos/todos.action";
import Loader from "../loader/loader.component";

export default memo(function TodoList() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.todos);

  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      setIsFetching(true);
      await dispatch(getTodos());
      setIsFetching(false);
    };
    fetchTodos();
  }, []);

  return (
    <TodoListContainer>
      <h1>Todo List</h1>
      <TodoForm />
      <Status />
      {isFetching && <Loader />}
      <TodoItemsContainer>
        {todos.map((todo, i) => (
          <Todo key={i} todo={todo} />
        ))}
      </TodoItemsContainer>
    </TodoListContainer>
  );
});
