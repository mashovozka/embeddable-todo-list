import { takeEvery, call, put } from "redux-saga/effects";
import { TODOS_ACTION_TYPES, setTodos } from "../todos/todos.action";
import { todosApi } from "../../api/api";

export function* todosSaga() {
  yield takeEvery(TODOS_ACTION_TYPES.GET_TODOS, function* () {
    try {
      const response = yield call(todosApi.getTodos);
      yield put(setTodos(response));
    } catch (error) {}
  });
}
