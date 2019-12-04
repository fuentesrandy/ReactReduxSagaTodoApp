import axios from "axios";

import baseUrl from "./uri"

function handleError(err) {
  throw err.response;
}

function handleResponse(response) {
  return response.data;
}

export function getRequest(path) {
  return axios
    .get(`${baseUrl}${path}`)
    .then(handleResponse)
    .catch(handleError);
}

export function postRequest(path, data) {
  return axios
    .post(`${baseUrl}${path}`, data)
    .then(handleResponse)
    .catch(handleError);
}

export function putRequest(path, data) {
  return axios
    .put(`${baseUrl}${path}`, data)
    .then(handleResponse)
    .catch(handleError);
}

export function deleteRequest(path) {
  return axios
    .delete(`${baseUrl}${path}`)
    .then(handleResponse)
    .catch(handleError);
}
