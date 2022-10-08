//import vars from constants
import {apiURL, headers} from "./const.js";

// Response template
function response(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
};


// GET request
function getRequest(target) {
  return fetch(`${apiURL}${target}`, {
    headers
  })
    .then(response)
}

// POST request
function postRequest(target, body) {
  return fetch(`${apiURL}${target}`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  })
    .then(response)
}

// DELETE request
function deleteRequest(target, id) {
  return fetch(`${apiURL}${target}/${id}`, {
    method: 'DELETE',
    headers
  })
    .then(response);
}

// PATCH request
function patchRequest(target, body) {
  return fetch(`${apiURL}${target}`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(body)
  })
    .then(response);
}

// PUT request
function putRequest(target, id) {
  return fetch(`${apiURL}${target}/${id}`, {
    method: 'PUT',
    headers
  })
    .then(response);
}

export {getRequest, postRequest, deleteRequest, patchRequest, putRequest}
