import { TODOS_ACTION_TYPES } from "./todos.action";

const initialState = {
  todos: [],
  completedTodos: 0,
  inProgressTodos: 0,
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_ACTION_TYPES.SET_TODOS:
      return {
        ...state,
        todos: [...action.payload]
          .sort((a, b) => b.isComplete - a.isComplete)
          .reverse(),
        completedTodos: action.payload.filter((todo) => todo.isComplete).length,
        inProgressTodos: action.payload.filter((todo) => !todo.isComplete)
          .length,
      };
    case TODOS_ACTION_TYPES.ADD_TODO:
      return [...state, ...action.payload];
    case TODOS_ACTION_TYPES.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case TODOS_ACTION_TYPES.TOGGLE_COMPLETE_TODO:
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, isComplete: !todo.isComplete }
          : todo
      );
      return {
        ...state,
        todos: updatedTodos,
        completedTodos: updatedTodos.filter((todo) => todo.isComplete).length,
        inProgressTodos: updatedTodos.filter((todo) => !todo.isComplete).length,
      };
    default:
      return state;
  }
};
