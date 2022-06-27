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
const popups = document.querySelectorAll('.popup');
const popupCloseButtons = document.querySelectorAll('.button__popup-close');
const profile = document.querySelector('.profile');
const profileButtonEdit = profile.querySelector('.profile__btn-edit');
const profileTitleValue = profile.querySelector('.profile__title');
const profileSubtitleValue = profile.querySelector('.profile__subtitle');
const profilePopup = document.querySelector('#popup-profile');
const profilePopupForm = document.querySelector('#profile-popup-form');
const profilePopupInputTitle = profilePopupForm.querySelector('#popup-profile-title');
const profilePopupInputSubtitle = profilePopupForm.querySelector('#popup-profile-subtitle');
const elementPopup = document.querySelector('#popup-element');
const elementPopupButtonOpen = document.querySelector('.profile__btn-add');
const elementName = document.querySelector('#element-name');
const elementLink = document.querySelector('#element-url');
const elementsList = document.querySelector('.elements__list');
const elementTemplate = document.querySelector('#element-template').content;
const previewPopup = document.querySelector('#popup-preview');
const previewImage = previewPopup.querySelector('.popup-preview__image');
const previewTitle = previewPopup.querySelector('.popup-preview__title');


export {
  popups,
  popupCloseButtons,
  profile,
  profileButtonEdit,
  profileTitleValue,
  profileSubtitleValue,
  profilePopup,
  profilePopupForm,
  profilePopupInputTitle,
  profilePopupInputSubtitle,
  elementPopup,
  elementPopupButtonOpen,
  elementName,
  elementLink,
  elementsList,
  elementTemplate,
  previewPopup,
  previewImage,
  previewTitle,
  initialCards
}

