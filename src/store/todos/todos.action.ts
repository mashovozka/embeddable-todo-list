import { todosApi } from "../../api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITodo } from "../../types/todo.types";

interface todo {
  id: string;
  value: string;
  done: boolean;
  createdAt: number;
}

export const fetchTodosAsync = createAsyncThunk<todo[], void>(
  "todos/fetchTodos",
  async () => {
    const response = await todosApi.getTodos();
    return response;
  }
);

export const addTodoAsync = createAsyncThunk(
  "addTodoAsync",
  async (newTodo: ITodo) => {
    const response = await todosApi.addTodo(newTodo);
    return response;
  }
);

export const toggleTodoAsync = createAsyncThunk(
  "toggleTodosAsync",
  async (toggledTodo: ITodo) => {
    const response = await todosApi.toggleTodo(toggledTodo);
    return response;
  }
);
