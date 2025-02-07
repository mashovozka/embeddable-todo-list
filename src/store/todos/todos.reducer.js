import { TODOS_ACTION_TYPES } from "./todos.action";

const initialState = {
  todos: [],
  completedTodos: 0,
  inProgressTodos: 0,
  isLoading: false,
  error: null,
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_ACTION_TYPES.FETCH_TODOS_START:
      return {
        ...state,
        isLoading: true,
      };
    case TODOS_ACTION_TYPES.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload.reverse(),
        completedTodos: action.payload.filter((todo) => todo.isComplete).length,
        inProgressTodos: action.payload.filter((todo) => !todo.isComplete)
          .length,
        isLoading: false,
      };
    case TODOS_ACTION_TYPES.FETCH_TODOS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case TODOS_ACTION_TYPES.ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
        inProgressTodos: state.inProgressTodos + 1,
      };

    case TODOS_ACTION_TYPES.TOGGLE_TODO:
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
