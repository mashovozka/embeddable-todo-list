import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  completedTodos: 0,
  inProgressTodos: 0,
  isLoading: false,
  error: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    fetchTodosStart: (state) => {
      state.isLoading = true;
    },
    fetchTodosSuccess: (state, action) => {
      state.todos = action.payload.reverse();
      state.completedTodos = action.payload.filter((todo) => todo.done).length;
      state.inProgressTodos = action.payload.filter(
        (todo) => !todo.done
      ).length;
      state.isLoading = false;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    addTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos];
      state.inProgressTodos++;
    },
    toggleTodo: (state, action) => {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
      );
      state.todos = updatedTodos;
      state.completedTodos = updatedTodos.filter((todo) => todo.done).length;
      state.inProgressTodos = updatedTodos.filter((todo) => !todo.done).length;
    },
  },
});

export const todosReducer = todosSlice.reducer;
export const {
  fetchTodosStart,
  fetchTodosSuccess,
  setError,
  addTodo,
  toggleTodo,
} = todosSlice.actions;
