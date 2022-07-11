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

function postRequest() {
  return fetch(`${apiURL}${target}`, {
    method: POST,
    headers: {
      authorization: token,

    }
  })
    .then(res => res.json())
    .then((result) => {
      return result
    });
}

function delRequest() {
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
