import { todosApi } from "../../api/api";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { setError } from "./todos.slice";

export const fetchTodosAsync = createAsyncThunk(
  "fetchTodosAsync",
  async (dispatch) => {
    try {
      const response = await todosApi.getTodos();
      return response;
    } catch (error) {
      dispatch(setError(error));
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
      console.log("error", error);
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
      console.log("error", error);
    }
  }
);
