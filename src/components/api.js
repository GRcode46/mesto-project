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

function updateRequest() {
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

export {getRequest, postRequest, delRequest, updateRequest}
