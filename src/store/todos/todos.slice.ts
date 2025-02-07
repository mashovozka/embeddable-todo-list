import { createSlice } from "@reduxjs/toolkit";
import { fetchTodosAsync, addTodoAsync, toggleTodoAsync } from "./todos.action";

interface TodosState {
  todos: {
    id: string;
    value: string;
    done: boolean;
    createdAt: number;
  }[];
  completedTodos: number;
  inProgressTodos: number;
  isLoading: boolean;
  failedToGetTodos: boolean;
  showToastError: boolean;
}

const initialState: TodosState = {
  todos: [],
  completedTodos: 0,
  inProgressTodos: 0,
  isLoading: false,
  failedToGetTodos: false,
  showToastError: false,
};

const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    setFailedToGetTodos: (state) => {
      state.failedToGetTodos = true;
    },
    setShowToastError: (state) => {
      state.showToastError = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodosAsync.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchTodosAsync.fulfilled, (state, action) => {
      console.log("fetchTodosAsync.fulfilled", action.payload);
      state.todos = action.payload.reverse();
      state.completedTodos = action.payload.filter((todo) => todo.done).length;
      state.inProgressTodos = action.payload.filter(
        (todo) => !todo.done
      ).length;
      state.isLoading = false;
    });

    builder.addCase(fetchTodosAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.showToastError = true;
      state.failedToGetTodos = true;
    });

    builder.addCase(addTodoAsync.fulfilled, (state, action) => {
      state.todos = [action.payload, ...state.todos];
      state.inProgressTodos++;
    });

    builder.addCase(addTodoAsync.rejected, (state) => {
      state.showToastError = true;
    });

    builder.addCase(toggleTodoAsync.fulfilled, (state, action) => {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
      );
      state.todos = updatedTodos;
      state.completedTodos = updatedTodos.filter((todo) => todo.done).length;
      state.inProgressTodos = updatedTodos.filter((todo) => !todo.done).length;
    });

    builder.addCase(toggleTodoAsync.rejected, (state) => {
      state.showToastError = true;
    });
  },
});

export const todosReducer = todosSlice.reducer;
export const { setFailedToGetTodos, setShowToastError } = todosSlice.actions;
