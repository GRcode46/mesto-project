// Create UserInfo class

export default class Card {
  static selectors = {
    cardsTemplateElementSelector: '.element',
    cardsTemplateImageSelector: '.element__image',
    cardsTemplateNameSelector: '.element__name',
    cardsTemplateTrashSelector: '.element__trash',
    cardsTemplateLikeCounterSelector: '.element__like-counter',
    cardsTemplateLikeButtonSelector: '.element__btn-like',
  }

  constructor(
    data,
    templateSelector, {
      userId,
      handleLikeSet,
      handleLikeDelete,
      handleCardDelete,
      handleCardClick
    }
  ) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._id = data._id;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._constructor = templateSelector;
    this._handleLikeSet = handleLikeSet;
    this._handleLikeDelete = handleLikeDelete;
    this._handleCardDelete = handleCardDelete;
    this._handleCardClick = handleCardClick;
  }

  _getElement() {
    return document
      .querySelector(this._constructor)

      .content.querySelector(Card.selectors.cardsTemplateElementSelector)
      .cloneNode(true);
  }

  createCard() {
    this._element = this._getElement();
    this._image = this._element.querySelector(Card.selectors.cardsTemplateImageSelector);
    this._element.querySelector(Card.selectors.cardsTemplateNameSelector).textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;
    this._likeCounter = this._element.querySelector(Card.selectors.cardsTemplateLikeCounterSelector);
    this._deleteButton = this._element.querySelector(Card.selectors.cardsTemplateTrashSelector);
    this._likeButton = this._element.querySelector(Card.selectors.cardsTemplateLikeButtonSelector);
    this._getLikesCounter();
    this._checkId();
    this._checkLikeUserSet();
    this._setEventListeners();
    return this._element;
  }

  _getLikesCounter() {
    this._likeCounter.textContent = this._likes.length;
  }

  deleteLike(data) {
    this._likeButton.classList.remove("element__btn-like_active");
    return (this._likeCounter.textContent = `${data.likes.length}`);
  }

  setLike(data) {
    this._likeButton.classList.add("element__btn-like_active");
    return (this._likeCounter.textContent = `${data.likes.length}`);
  }

  _checkId() {
    if (this._ownerId !== this._userId) {
      this._deleteButton.remove();
    }
  }

  deleteCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._image.addEventListener("click", () => {
      this._handleCardClick();
    });

    this._likeButton.addEventListener("click", () => {
      if (!this._likeButton.classList.contains("element__btn-like_active")) {
        this._handleLikeSet();
      } else {
        this._handleLikeDelete();
      }
    });

    this._deleteButton.addEventListener("click", () => {
      this._handleCardDelete();
    });
  }

  _checkLikeUserSet() {
    this._likes.forEach((like) => {
      if (like._id === this._userId) {

        this._likeButton.classList.add("element__btn-like_active");
      }
    });
  }
}

