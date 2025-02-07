import { todosApi } from "../../api/api";

import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  fetchTodosStart,
  fetchTodosSuccess,
  setError,
  addTodo,
  toggleTodo,
} from "./todos.slice";

export const fetchTodosAsync = () => async (dispatch) => {
  dispatch(fetchTodosStart());
  try {
    const response = await todosApi.getTodos();
    dispatch(fetchTodosSuccess(response));
  } catch (error) {
    dispatch(setError(error));
  }
};

export const addTodoAsync = (newTodo) => async (dispatch) => {
  dispatch(addTodo(newTodo));
  try {
    await todosApi.addTodo(newTodo);
  } catch (error) {
    console.log("error", error);
  }
};

export const toggleTodoAsync = (toggledTodo) => async (dispatch) => {
  dispatch(toggleTodo(toggledTodo));
  try {
    await todosApi.toggleTodo(toggledTodo);
  } catch (error) {
    console.log("error", error);
  }
};
