// Import scripts
import './pages/index.css';
import {
  profileButtonEdit,
  profilePopup,
  profilePopupForm,
  elementPopup,
  elementPopupButtonOpen,
  popupCloseButtons,
  cardsPath,
  userDataPath
} from "./components/const.js"

import {
  getProfile,
  loadEditProfileForm
} from "./components/profile.js"

import {
  closePopup,
  openPopup,
  saveEditProfileForm
} from "./components/modal.js"

import {enableValidation} from "./components/validate.js";

import {getCardsData, createElement} from "./components/cards.js"

popupCloseButtons.forEach((popupCloseButton) => {
  popupCloseButton.addEventListener('click', function (evt) {
    closePopup(evt.target.closest("div.popup"))
  })
})

profileButtonEdit.addEventListener('click', () => {
  loadEditProfileForm(profilePopup);
});

elementPopupButtonOpen.addEventListener('click', () => {
  openPopup(elementPopup);
});

elementPopup.addEventListener('submit', createElement);

profilePopupForm.addEventListener('submit', saveEditProfileForm);

// Enable form validation
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.form__input',
  submitButtonSelector: '.popup__btn-submit',
  inactiveButtonClass: 'button_state_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
});

// Load profile info
getProfile(userDataPath)

// Load cards
getCardsData(cardsPath)
