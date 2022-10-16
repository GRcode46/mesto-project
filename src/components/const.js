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
const popupCloseButtons = document.querySelectorAll('.button__popup-close');
const elementSubmitButton = document.querySelector('#edit-card-btn-submit');
const profile = document.querySelector('.profile');
const profileButtonEdit = profile.querySelector('.profile__btn-edit');
const profileTitleValue = profile.querySelector('.profile__title');
const profileSubtitleValue = profile.querySelector('.profile__subtitle');
const profileAvatar = profile.querySelector('.profile__avatar')
const profilePopup = document.querySelector('#popup-profile');
const profilePopupForm = document.querySelector('#profile-popup-form');
const profilePopupInputTitle = profilePopupForm.querySelector('#popup-profile-title');
const profilePopupInputSubtitle = profilePopupForm.querySelector('#popup-profile-subtitle');
const profileSubmitButton = document.querySelector('#edit-profile-btn-submit');
const elementPopup = document.querySelector('#popup-element');
const elementPopupForm = document.querySelector('#card-popup-form');
const elementPopupButtonOpen = document.querySelector('.profile__btn-add');
const elementName = document.querySelector('#element-name');
const elementLink = document.querySelector('#element-url');
const elementsList = document.querySelector('.elements__list');
const elementTemplate = document.querySelector('#element-template').content;
const previewPopup = document.querySelector('#popup-preview');
const previewImage = previewPopup.querySelector('.popup-preview__image');
const previewTitle = previewPopup.querySelector('.popup-preview__title');
const deleteElementPopup = document.querySelector('#popup-card-delete-confirmation');
const deletePopupBtnSubmit = deleteElementPopup.querySelector('#card-del-btn-submit');
const profileAvatarBtnEdit = profile.querySelector('.profile__avatar-btn');
const avatarPopup = document.querySelector('#popup-avatar');
const avatarSubmitButton = document.querySelector('#edit-avatar-btn-submit');
const avatarLink = document.querySelector('#avatar-url');
const avatarPopupForm = document.querySelector('#avatar-popup-form');

export {
  apiURL,
  headers,
  popupCloseButtons,
  profile,
  profileButtonEdit,
  profileTitleValue,
  profileSubtitleValue,
  profileAvatar,
  profilePopup,
  profilePopupForm,
  profilePopupInputTitle,
  profilePopupInputSubtitle,
  elementPopup,
  elementPopupForm,
  elementPopupButtonOpen,
  elementName,
  elementLink,
  elementsList,
  elementTemplate,
  elementSubmitButton,
  previewPopup,
  previewImage,
  previewTitle,
  deleteElementPopup,
  deletePopupBtnSubmit,
  profileAvatarBtnEdit,
  avatarPopup,
  avatarSubmitButton,
  avatarLink,
  avatarPopupForm,
  profileSubmitButton,
}

