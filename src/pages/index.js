// Import scripts & styles
import './index.css';
import {
  profileButtonEdit,
  profilePopup,
  profilePopupForm,
  elementPopup,
  elementPopupButtonOpen,
  popupCloseButtons,
  deletePopupBtnSubmit,
  profileAvatarBtnEdit,
  avatarPopup,
  profileTitleValue,
  profileSubtitleValue,
  profileAvatar,
} from "../components/const.js"

import {
  loadEditProfileForm
} from "../components/profile.js"

import {
  getProfile,
  getCards
} from "../components/api";

import {
  closePopup,
  openPopup,
  saveEditProfileForm,
  saveAvatarForm
} from "../components/modal.js"

import {
  enableValidation,
} from "../components/validate.js";

import {
  createElement,
  deleteElement,
  renderElement,
  createCard
} from "../components/cards.js"

export let userId = null;

popupCloseButtons.forEach((popupCloseButton) => {
  const popup = popupCloseButton.closest(".popup");
  popupCloseButton.addEventListener('click', function (evt) {
    closePopup(popup)
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
  deleteElement(evt)
});

profileAvatarBtnEdit.addEventListener('click', () => {
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

// export let userId;
Promise.all([getProfile(), getCards()])
  .then(([userData, cardsData]) => {
    profileTitleValue.textContent = userData.name;
    profileSubtitleValue.textContent = userData.about;
    profileAvatar.src = userData.avatar;
    userId = userData._id;
    cardsData.reverse().forEach((element) => {
      renderElement(createCard(element.name, element.link, element.likes, element.owner._id, element._id, userData._id, userId))
    });
  })
  .catch((err) => {
    profileTitleValue.textContent = 'Сервер болеть.'
    profileSubtitleValue.textContent = 'Заходите завтра.'
    console.error('Ошибка при загрузке данных с сервера.', err);
  });
