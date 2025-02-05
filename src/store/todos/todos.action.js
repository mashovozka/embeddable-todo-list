export const TODOS_ACTION_TYPES = {
  GET_TODOS: "GET_TODOS",
  SET_TODOS: "SET_TODOS",
  ADD_TODO: "ADD_TODO",
  DELETE_TODO: "DELETE_TODO",
};

export const getTodos = (body) => ({
  type: TODOS_ACTION_TYPES.GET_TODOS,
  payload: body,
});

export const setTodos = (body) => ({
  type: TODOS_ACTION_TYPES.SET_TODOS,
  payload: body,
});
