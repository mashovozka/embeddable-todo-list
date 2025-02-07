import { todosApi } from "../../api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setFailedToGetTodos, setShowToastError } from "./todos.slice";

export const fetchTodosAsync = createAsyncThunk(
  "fetchTodosAsync",
  async (dispatch) => {
    try {
      const response = await todosApi.getTodos();
      return response;
    } catch (error) {
      dispatch(setFailedToGetTodos(true));
      dispatch(setShowToastError(true));
    }
  }
);

export const addTodoAsync = createAsyncThunk(
  "addTodoAsync",
  async (newTodo, dispatch) => {
    try {
      const response = await todosApi.addTodo(newTodo);
      return response;
    } catch (error) {
      dispatch(setShowToastError(true));
    }
  }
);

export const toggleTodoAsync = createAsyncThunk(
  "toggleTodosAsync",
  async (toggledTodo, dispatch) => {
    try {
      const response = await todosApi.toggleTodo(toggledTodo);
      return response;
    } catch (error) {
      dispatch(setShowToastError(true));
    }
  }
);
