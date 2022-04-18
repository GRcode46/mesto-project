// 1. Global variables
//
// array for elements
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

// profile popup
const profilePopup = document.querySelector('#popup-profile');
const profilePopupForm = document.querySelector('#profile-popup-form');
const profilePopupInputTitle = profilePopupForm.querySelector('#popup-profile-title');
const profilePopupInputSubtitle = profilePopupForm.querySelector('#popup-profile-subtitle');
const profilePopupButtonClose = profilePopupForm.querySelector('#profile-btn-close');

// element popup
const elementPopup = document.querySelector('#popup-element');
const elementPopupButtonOpen = document.querySelector('.profile__btn-add');
const elementPopupButtonClose = document.querySelector('#card-btn-close');

// profile
const profile = document.querySelector('.profile');
const profileButtonEdit = profile.querySelector('.profile__btn-edit');
const profileTitleValue = profile.querySelector('.profile__title');
const profileSubtitleValue = profile.querySelector('.profile__subtitle');

// popup-preview popup
const previewPopup = document.querySelector('#popup-preview');
const previewImage = previewPopup.querySelector('.popup-preview__image');
const previewTitle = previewPopup.querySelector('.popup-preview__title');
const previewPopupButtonClose = document.querySelector('#preview-btn-close');

// elements block
const elementsList = document.querySelector('.elements__list');

// elements template
const elementTemplate = document.querySelector('#element-template').content;

//2. Functions


let openPopup = (popup) => popup.classList.add('popup_opened'); // open edit profile popup
let closePopup = (popup) => popup.classList.remove('popup_opened'); // close edit profile popup
let closePopupOutsideClick = function (evt) { // close any popup over outside click
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}
let loadEditProfileForm = function (popup){ // open edit profile popup
  profilePopupInputTitle.value = profileTitleValue.textContent;
  profilePopupInputSubtitle.value = profileSubtitleValue.textContent;
  openPopup(popup);
}
let saveEditProfileForm = function (evt) { // Save edit profile form
  evt.preventDefault();
  profileTitleValue.textContent = profilePopupInputTitle.value;
  profileSubtitleValue.textContent = profilePopupInputSubtitle.value;
  closePopup(profilePopup);
}
function loadElements(elementName, elementLink) { // create element node
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const likeBtn = element.querySelector('.element__btn-like');
  const elementImage = element.querySelector('.element__image');
  element.querySelector('.element__name').textContent = elementName;
  element.querySelector('.element__image').src = elementLink;
  element.querySelector('.element__image').alt = elementName;
  likeBtn.addEventListener("click", () => likeBtn.classList.toggle('element__btn-like_active'));


  elementImage.addEventListener('click', () => { //add preview action for new elements from array
    openPopupImage(elementLink, elementName)
  });

  element.querySelector('.element__trash').addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  });
  elementsList.prepend(element);
}

function openPopupImage(imageLink, imageTitle) { //open preview image popup
  openPopup(previewPopup);
  previewImage.setAttribute('src', imageLink);
  previewTitle.textContent = imageTitle;
}

function createElement(evt) { //add image from popup
  evt.preventDefault();
  const elementName = document.querySelector('#element-name');
  const elementLink = document.querySelector('#element-url');
  loadElements(elementName.value, elementLink.value);
  elementName.value = '';
  elementLink.value = '';
  closePopup(elementPopup);
}


//3. Global actions
profilePopupButtonClose.addEventListener('click', ()=> {closePopup(profilePopup)});
profileButtonEdit.addEventListener('click', ()=> {loadEditProfileForm(profilePopup)});
profilePopup.addEventListener('click', closePopupOutsideClick);
profilePopupForm.addEventListener('submit', saveEditProfileForm);

elementPopupButtonClose.addEventListener('click', ()=> {closePopup(elementPopup)});
elementPopupButtonOpen.addEventListener('click', ()=> {openPopup(elementPopup)});
elementPopup.addEventListener('click', closePopupOutsideClick);
elementPopup.addEventListener('submit', createElement);

previewPopup.addEventListener('click', closePopupOutsideClick);
previewPopupButtonClose.addEventListener('click', ()=> {closePopup(previewPopup)})

initialCards.reverse().forEach(element => loadElements(element.name, element.link));








