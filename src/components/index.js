// Import scripts
import '../pages/index.css';
import {
  profileButtonEdit,
  profilePopup,
  profilePopupForm,
  elementPopup,
  elementPopupButtonOpen,
  popupCloseButtons,
  cardsPath,
  userDataPath,
  deletePopupBtnSubmit,
  profileAvatarBtnEdit,
  avatarPopup,
  avatarLink
} from "./const.js"

import {
  getProfile,
  loadEditProfileForm,

} from "./profile.js"

import {
  closePopup,
  openPopup,
  saveEditProfileForm,
  saveAvatarForm
} from "./modal.js"

import {enableValidation} from "./validate.js";

import {getCardsData, createElement, deleteElement} from "./cards.js"

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

deletePopupBtnSubmit.addEventListener('click', (evt) => {
  deleteElement(cardsPath, evt)
});

// deletePopupBtnReset.addEventListener('click', (evt) => {
//   closePopup(evt.target.closest("div.popup"));
//   deletePopupBtnSubmit.removeAttribute('data-id')
// })

profileAvatarBtnEdit.addEventListener('click', () => {
  avatarLink.value.reset;

  openPopup(avatarPopup);
});

avatarPopup.addEventListener('submit', saveAvatarForm);

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
