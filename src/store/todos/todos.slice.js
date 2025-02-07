import { createSlice } from "@reduxjs/toolkit";
import { fetchTodosAsync, addTodoAsync, toggleTodoAsync } from "./todos.action";

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
  extraReducers: (builder) => {
    builder.addCase(fetchTodosAsync.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchTodosAsync.fulfilled, (state, action) => {
      state.todos = action.payload.reverse();
      state.completedTodos = action.payload.filter((todo) => todo.done).length;
      state.inProgressTodos = action.payload.filter(
        (todo) => !todo.done
      ).length;
      state.isLoading = false;
    });

    builder.addCase(fetchTodosAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
    });

    builder.addCase(addTodoAsync.fulfilled, (state, action) => {
      state.todos = [action.payload, ...state.todos];
      state.inProgressTodos++;
    });

    builder.addCase(toggleTodoAsync.fulfilled, (state, action) => {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
      );
      state.todos = updatedTodos;
      state.completedTodos = updatedTodos.filter((todo) => todo.done).length;
      state.inProgressTodos = updatedTodos.filter((todo) => !todo.done).length;
    });
  },
});

export const todosReducer = todosSlice.reducer;
export const { setError, addTodo, toggleTodo } = todosSlice.actions;
