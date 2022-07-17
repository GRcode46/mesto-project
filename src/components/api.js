//import vars from constants
import {apiURL, token} from "./const.js";

//GET request and return JSON with results
function getRequest(target) {
  return fetch(`${apiURL}${target}`, {
    headers: {
      authorization: token
    }
  })
    .then(res => res.json())
    .then((result) => {
      return result
    });
}


// function getRequest1(target, body, method) {
//   if body === null ?
//   return fetch(`${apiURL}${target}`, {
//
//     headers: {
//       authorization: token
//     }
//   })
//     .then(res => res.json())
//     .then((result) => {
//       return result
//     });
// }

function postRequest(target, body) {
  return fetch(`${apiURL}${target}`, {
    method: 'POST',
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .then((result) => {
      return result
    });
}

function delRequest(target, id) {
  return fetch(`${apiURL}${target}/${id}`, {
    method: 'DELETE',
    headers: {
      authorization: token
    }
  })
    .then(res => res.json())
    .then((result) => {
      return result
    });
}

function patchRequest(target, body) {
  return fetch(`${apiURL}${target}`, {
    method: 'PATCH',
    headers: {
      authorization: token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(res => res.json())
    .then((result) => {
      return result
    });
}

export {getRequest, postRequest, delRequest, patchRequest}
