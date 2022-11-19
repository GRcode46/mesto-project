// Create Api class
export default class Api {
  constructor(url, headers) {
    this._url = url;
    this._headers = headers;
  }

  // Request template
  _request(url, options) {
    return fetch(url, options).then(this._checkResponse)
  }

  // Response template
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res);
  }

  // GET profile request
  getProfile() {
    return this._request(`${this._url}/users/me`, {
      headers: this._headers
    })
  }

  // GET cards request
  getCards() {
    return this._request(`${this._url}/cards`, {
      headers: this._headers
    })
  }

// ADD CARD request
  addCard(data) {
    return this._request(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
  }

// DELETE CARD request
  deleteCard(id) {
    return this._request(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
  }

// PATCH PROFILE DATA request
  patchProfile(data) {
    return this._request(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
  }

// PATCH PROFILE AVATAR request
  patchAvatar(data) {
    return this._request(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      })
    })
  }

// PUT LIKE request
  putLike(id) {
    return this._request(`${this._url}/cards/likes/${id}`, {
      method: 'PUT',
      headers: this._headers
    })
  }

// DELETE LIKE request
  deleteLike(id) {
    return this._request(`${this._url}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
  }
}
