//import vars from constants
import {
  apiURL,
  headers,
} from "./const.js";

// Request
function request(url, options) {
  return fetch(url, options)
    .then(checkResponse)
}

// Response
function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
}

// GET profile
function getProfile() {
  return request(`${apiURL}/users/me`, {
    headers
  })
}

// GET cards
function getCards() {
  return request(`${apiURL}/cards`, {
    headers
  })
}

// ADD CARD request
function addCard(body) {
  return request(`${apiURL}/cards`, {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  })
}

// DELETE CARD request
function deleteCard(id) {
  return request(`${apiURL}/cards/${id}`, {
    method: 'DELETE',
    headers
  })
}

// PATCH PROFILE DATA request
function patchProfile(name, about) {
  return request(`${apiURL}/users/me`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      name: name,
      about: about
    })
  })
}

// PATCH PROFILE AVATAR request
function patchAvatar(link) {
  return request(`${apiURL}/users/me/avatar`, {
    method: 'PATCH',
    headers,
    body: JSON.stringify({
      avatar: link,
    })
  })
}

// PUT LIKE request
function putLike(id) {
  return request(`${apiURL}/cards/likes/${id}`, {
    method: 'PUT',
    headers
  })
}

// DELETE LIKE request
function deleteLike(id) {
  return request(`${apiURL}/cards/likes/${id}`, {
    method: 'DELETE',
    headers
  })
}

export {
  addCard,
  deleteCard,
  patchProfile,
  patchAvatar,
  putLike,
  deleteLike,
  getProfile,
  getCards
}
