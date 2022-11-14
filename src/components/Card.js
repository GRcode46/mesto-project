import {userId} from "../pages";

export default class Card {
  constructor(
    data,
    selector, {
      userID,
      handleLikeSet,
      handleLikeDelete,
      handleDelete,
      handleCardClick
    }
  ) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._id = data.id;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._userId = userID
    this._constructor = selector;
    this._handleLikeSet = handleLikeSet;
    this._handleLikeDelete = handleLikeDelete;
    this._handleDelete = handleDelete;
    this._handleCardClick = handleCardClick;
  }
}
