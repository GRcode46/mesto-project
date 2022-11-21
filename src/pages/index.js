// Import styles % scripts
import './index.css';
import {
  apiURL,
  avatarPopupForm,
  elementPopupButtonOpen,
  elementPopupForm,
  headers,
  profileAvatarBtnEdit,
  profileButtonEdit,
  profilePopupForm,
  profilePopupInputSubtitle,
  profilePopupInputTitle,
  profileSubtitleValue,
  profileTitleValue,
  selectors,
  cardsList
} from "../vendor/const.js"

import Api from "../components/Api"
import UserInfo from "../components/UserInfo";
import Section from "../components/Section"
import Card from "../components/Card"
import PopupWithForm from "../components/PopupWithForm"
import PopupWithImage from "../components/PopupWithImage"
import FormValidator from "../components/FormValidator"

let userId = null;

// Create Api instances
const api = new Api(apiURL, headers);

// Create UserInfo instances
const userInfo = new UserInfo();

// Create Section instances
const cardList = new Section(
  {
    renderItems: (item) => {
      cardList.addItem(createCardClass(item, selectors.cardsTemplateSelector));
    },
  },
  cardsList
);

// Create FormValidator instances
const editFormValidator = new FormValidator(selectors, profilePopupForm);
const avatarFormValidator = new FormValidator(selectors, avatarPopupForm);
const addFormValidator = new FormValidator(selectors, elementPopupForm);

// Create Popup instances
const editProfilePopup = new PopupWithForm(selectors.popupProfileSelector, changeProfileFormSubmitHandler);
const addCardPopup = new PopupWithForm(selectors.popupCardSelector, addCardFormSubmitHandler);
const editAvatarPopup = new PopupWithForm(selectors.popupAvatarSelector, changeAvatarFormSubmitHandler);
const imagePreviewPopup = new PopupWithImage(selectors.popupImagePreviewSelector);

// Enable validation for forms
editFormValidator.enableValidation();
avatarFormValidator.enableValidation();
addFormValidator.enableValidation();

// Add eventListeners for popups
editProfilePopup.setEventListeners();
addCardPopup.setEventListeners()
editAvatarPopup.setEventListeners();
imagePreviewPopup.setEventListeners();

// Add eventListeners for buttons
elementPopupButtonOpen.addEventListener("click", () => {
  addCardPopup.openPopup();
  addFormValidator.setInitialState();
});

profileButtonEdit.addEventListener("click", () => {
  const {name, about} = userInfo.getUserInfo();
  profilePopupInputTitle.value = name;
  profilePopupInputSubtitle.value = about;
  editProfilePopup.openPopup();
  editFormValidator.setInitialState();
});

profileAvatarBtnEdit.addEventListener("click", () => {
  editAvatarPopup.openPopup();
  avatarFormValidator.setInitialState();
});

// FUNCTIONS
// Add card function
function addCardFormSubmitHandler(data) {
  return api
    .addCard(data)
    .then((cardsData) => {
      const cardElement = createCardClass(cardsData, selectors.cardsTemplateSelector);
      cardList.addItem(cardElement);
    })
}

// Edit profile function
function changeProfileFormSubmitHandler(data) {
  return api
    .patchProfile(data)
    .then((res) => {
      userInfo.setUserInfo(res);
    })
}

// Edit avatar function
function changeAvatarFormSubmitHandler(data) {
  return api
    .patchAvatar(data)
    .then((res) => {
      userInfo.setUserAvatar(res);
    })
}

// Create card function
function createCardClass(data, cardsTemplate) {
  const cardHandlers = {
    userId,
    handleLikeDelete() {
      api
        .deleteLike(element._id)
        .then((data) => {
          element.deleteLike(data);
        })
        .catch((err) => console.log(`Like delete error: ${err}`));
    },
    handleCardDelete() {
      api
        .deleteCard(element._id)
        .then(() => {
          element.deleteCard();
        })
        .catch((err) => console.log(`Card delete error: ${err}`));
    },
    handleLikeSet() {
      api
        .putLike(element._id)
        .then((data) => {
          element.setLike(data);
        })
        .catch((err) => console.log(`Like add error: ${err}`));
    },
    handleCardClick() {
      imagePreviewPopup.openPopup(data);
    }
  }
  const element = new Card(data, cardsTemplate, cardHandlers)
  return element.createCard();
}

Promise.all([api.getProfile(), api.getCards()])
  .then(([userData, cardsData]) => {
    userInfo.setUserAvatar(userData);
    userInfo.setUserInfo(userData);
    userId = userData._id;
    cardList.renderItems(cardsData.reverse());
  })
  .catch((err) => {
    profileTitleValue.textContent = 'Server error.'
    profileSubtitleValue.textContent = 'Try again later.'
    console.error('Error:', err);
  });
