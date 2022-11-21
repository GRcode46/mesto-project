// API SETTINGS
const host = 'https://nomoreparties.co';
const api_version = 'v1';
const cohort = 'plus-cohort-15';
const token = 'b3089888-aa79-46f6-807a-8b107b401124'
const apiURL = `${host}/${api_version}/${cohort}`;
const headers = {
  authorization: token,
  'Content-Type': 'application/json'
}
const profile = document.querySelector('.profile');
const profileButtonEdit = profile.querySelector('.profile__btn-edit');
const profileTitleValue = profile.querySelector('.profile__title');
const profileSubtitleValue = profile.querySelector('.profile__subtitle');
const profilePopupForm = document.querySelector('#profile-popup-form');
const profilePopupInputTitle = profilePopupForm.querySelector('#popup-profile-title');
const profilePopupInputSubtitle = profilePopupForm.querySelector('#popup-profile-subtitle');
const elementPopupForm = document.querySelector('#card-popup-form');
const elementPopupButtonOpen = document.querySelector('.profile__btn-add');
const profileAvatarBtnEdit = profile.querySelector('.profile__avatar-btn');
const avatarPopupForm = document.querySelector('#avatar-popup-form');
const cardsList = document.querySelector(".elements__list");

export const selectors = {
  //Popup selectors START
  popupProfileSelector: '#popup-profile',
  popupCardSelector: '#popup-element',
  popupAvatarSelector: '#popup-avatar',
  popupImagePreviewSelector: '#popup-preview',
  //Popup selectors END
  //FormValidator selectors START
  formSelector: '.popup__form',
  inputSelector: '.form__input',
  submitButtonSelector: '.popup__btn-submit',
  inactiveButtonClass: 'button_state_inactive',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__input-error_active',
  //FormValidator selectors END

  // Card template selectors START
  cardsTemplateListSelector: '.elements__list',
  cardsTemplateSelector: '#element-template',
  // Card template selectors END

};
export {
  apiURL,
  headers,
  profile,
  profileButtonEdit,
  profileTitleValue,
  profileSubtitleValue,
  profilePopupForm,
  profilePopupInputTitle,
  profilePopupInputSubtitle,
  elementPopupForm,
  elementPopupButtonOpen,
  profileAvatarBtnEdit,
  avatarPopupForm,
  cardsList
}
