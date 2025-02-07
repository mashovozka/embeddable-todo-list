import { combineReducers } from "@reduxjs/toolkit";
import { todosReducer } from "./todos/todos.slice";

export const rootReducer = combineReducers({
  todos: todosReducer,
});
