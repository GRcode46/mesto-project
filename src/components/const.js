const host = 'https://nomoreparties.co';
const api_version = 'v1';
const cohort = 'plus-cohort-10';
const token = '57b8df36-44ff-41fe-a89b-2cd5bf92b88e' //не секьюрно конечно, но для опытов пойдёт
const apiURL = `${host}/${api_version}/${cohort}/`

const cardsPath = 'cards'
const userDataPath = 'users/me'

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
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


export {
  apiURL,
  cardsPath,
  userDataPath,
  token,
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
  initialCards
}

