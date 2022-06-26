import './pages/index.css';

import {
  profileButtonEdit,
  profilePopup,
  profilePopupForm,
  elementPopup,
  elementPopupButtonOpen,
  popups,
  popupCloseButtons
} from "./components/const.js"

import {
  closePopup,
  openPopup,
  closePopupOutsideClick,
  closePopupEscButton,
  loadEditProfileForm,
  saveEditProfileForm
} from "./components/modal.js"

import {enableValidation} from "./components/validate.js";

import {createElement} from "./components/cards.js"

popupCloseButtons.forEach((popupCloseButton) => {
  popupCloseButton.addEventListener('click', function (evt) {
    closePopup(evt.target.closest("div.popup"))
  })
})
popups.forEach((popup) => {
  popup.addEventListener('click', closePopupOutsideClick);
  window.addEventListener('keydown', closePopupEscButton);
})
profileButtonEdit.addEventListener('click', () => {
  loadEditProfileForm(profilePopup);
});
profilePopupForm.addEventListener('submit', saveEditProfileForm);
elementPopupButtonOpen.addEventListener('click', () => {
  openPopup(elementPopup);
});
elementPopup.addEventListener('submit', createElement);

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.form__input',
  submitButtonSelector: '.popup__btn-account-submit',
  inactiveButtonClass: 'button_state_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active'
});
