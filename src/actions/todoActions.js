import * as todoActions from "../actionTypes/todoActionTypes"

export const addTodo = (payload) => ({
    type: todoActions.ADD_TODO,
    payload
});

export const removeTodo = (payload) => ({
    type: todoActions.REMOVE_TODO,
    payload
});

export const toggleTodoComplete = (payload) => ({
    type: todoActions.TOGGLE_TODO,
    payload
});

export const fetchTodos = () => ({
    type: todoActions.FETCH_TODOS_LIST
})

export const fetchTodo = (payload) => ({
    type: todoActions.FETCH_TODO,
    payload
})