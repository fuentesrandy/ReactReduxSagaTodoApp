import * as request from "./helpers"

export const fetchTodos = () => request.getRequest(`/api/todo`)

export const fetchTodo = id =>  request.getRequest(`/api/todo${id}`)

export const insertTodo = payload => request.postRequest(`/api/todo`, payload);

export const updateTodo = payload => request.putRequest(`/api/todo/${payload.id}`, payload);

export const deleteTodo = id => request.deleteRequest(`/api/todo/${id}`);

