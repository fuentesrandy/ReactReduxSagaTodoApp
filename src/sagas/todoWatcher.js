//
import { takeLatest, put, call } from "redux-saga/effects";

import * as todoApi from "./api/todoApi";
import * as todoActionType from "../actionTypes/todoActionTypes";

// *  Generator functions so we can use yield
function* fetchTodoList() {
  const response = yield call(todoApi.fetchTodos);
  yield put({
    type: todoActionType.FETCH_TODOS_LIST_COMPLETE,
    payload: response
  });
}

function* fetchTodo(action) {
  const response = yield call(todoApi.fetchTodo, action.payload);
  yield put({
    type: todoActionType.FETCH_TODO_COMPLETE,
    payload: response
  });
}

function* addTodo(action) {
  const data = {
    ...action.payload,
    isCompleted: action.payload.isCompleted === true
  };
  const response = yield call(todoApi.insertTodo, data);
  yield put({
    type: todoActionType.ADD_TODO_COMPLETE,
    payload: response
  });
}

function* toggleTodo(action) {
  const data = {
    ...action.payload,
    isCompleted: !action.payload.isCompleted
  };
  const response = yield call(todoApi.updateTodo, data);
  yield put({
    type: todoActionType.TOGGLE_TODO_COMPLETE,
    payload: response
  });
}

function* removeTodo(action) {
  const response = yield call(todoApi.deleteTodo, action.payload.id);
  yield put({
    type: todoActionType.REMOVE_TODO_COMPLETE,
    payload: action.payload
  });
}

export default function* todoWatcher() {
  yield takeLatest(todoActionType.FETCH_TODOS_LIST, fetchTodoList);
  yield takeLatest(todoActionType.FETCH_TODO, fetchTodo);
  yield takeLatest(todoActionType.ADD_TODO, addTodo);
  yield takeLatest(todoActionType.TOGGLE_TODO, toggleTodo);
  yield takeLatest(todoActionType.REMOVE_TODO, removeTodo);
}
