import { TODOS_ACTION_TYPES } from "./todos.action";

export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case TODOS_ACTION_TYPES.SET_TODOS:
      return [...action.payload];
    case TODOS_ACTION_TYPES.ADD_TODO:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
