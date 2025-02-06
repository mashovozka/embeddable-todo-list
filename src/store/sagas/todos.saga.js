import { takeEvery, call, put } from "redux-saga/effects";
import { TODOS_ACTION_TYPES, setTodos } from "../todos/todos.action";
import { todosApi } from "../../api/api";

export function* todosSaga() {
  yield takeEvery(TODOS_ACTION_TYPES.GET_TODOS, function* () {
    try {
      const response = yield call(todosApi.getTodos);
      console.log("saga");
      yield put(setTodos(response));
    } catch (error) {
      console.log("error", error);
    }
  });
  yield takeEvery(TODOS_ACTION_TYPES.ADD_TODO, function* (action) {
    try {
      yield call(todosApi.addTodo, action.payload);
    } catch (error) {
      console.log("error", error);
    }
  });
  yield takeEvery(TODOS_ACTION_TYPES.TOGGLE_COMPLETE_TODO, function* (action) {
    try {
      yield call(todosApi.toggleTodo, action.payload);
    } catch (error) {
      console.log("error", error);
    }
  });
}
