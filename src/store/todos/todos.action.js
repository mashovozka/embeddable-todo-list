import { todosApi } from "../../api/api";

export const TODOS_ACTION_TYPES = {
  FETCH_TODOS_START: "FETCH_TODOS",
  FETCH_TODOS_SUCCESS: "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_FAILURE: "FETCH_TODOS_FAILURE",
  TOGGLE_TODO: "TOGGLE_TODO",
  ADD_TODO: "ADD_TODO",
};

export const fetchTodosStart = () => ({
  type: TODOS_ACTION_TYPES.FETCH_TODOS_START,
});

export const fetchTodosSuccess = (body) => ({
  type: TODOS_ACTION_TYPES.FETCH_TODOS_SUCCESS,
  payload: body,
});

export const fetchTodosFailure = (body) => ({
  type: TODOS_ACTION_TYPES.FETCH_TODOS_FAILURE,
  payload: body,
});

export const addTodo = (body) => ({
  type: TODOS_ACTION_TYPES.ADD_TODO,
  payload: body,
});

export const toggleTodo = (body) => ({
  type: TODOS_ACTION_TYPES.TOGGLE_TODO,
  payload: body,
});

export const fetchTodosAsync = () => async (dispatch) => {
  dispatch(fetchTodosStart());
  try {
    const response = await todosApi.getTodos();
    dispatch(fetchTodosSuccess(response));
  } catch (error) {
    dispatch(fetchTodosFailure(error));
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
