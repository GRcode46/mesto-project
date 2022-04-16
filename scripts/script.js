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
const profilePopup = document.querySelector('#profile-popup');
const profilePopupForm = document.querySelector('#profile-popup-form');
const profilePopupInputTitle = profilePopupForm.querySelector('#popup-profile-title');
const profilePopupInputSubtitle = profilePopupForm.querySelector('#popup-profile-subtitle');
const profilePopupCloseButton = profilePopupForm.querySelector('.popup__btn-close');

// profile
const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__btn-edit');
const profileTitleValue = profile.querySelector('.profile__title');
const profileSubtitleValue = profile.querySelector('.profile__subtitle');

// Elements block
const elementsList = document.querySelector('.elements__list');

// Elements template
const elementTemplate = document.querySelector('#element-template').content;

//2. Functions

// Close edit profile popup
let openPopup = (popup) => popup.classList.add('popup_opened');

// Close edit profile popup
let closePopup = (popup) => popup.classList.remove('popup_opened');

// Open edit profile popup
let loadEditProfileForm = function (popup){
  profilePopupInputTitle.value = profileTitleValue.textContent;
  profilePopupInputSubtitle.value = profileSubtitleValue.textContent;
  openPopup(popup);
}

// Save edit profile form
let saveEditProfileForm = function (evt) {
  evt.preventDefault();
  profileTitleValue.textContent = profilePopupInputTitle.value;
  profileSubtitleValue.textContent = profilePopupInputSubtitle.value;
  closePopup(profilePopup);
}

// Create element node
function loadElements(elementName, elementLink) {
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  // const likeBtn = element.querySelector('.element__btn-like');
  // const elementImage = element.querySelector('.element__image');

  element.querySelector('.element__name').textContent = elementName;
  element.querySelector('.element__image').src = elementLink;
  element.querySelector('.element__image').alt = elementName;
  // likeBtn.addEventListener("click", () => likeBtn.classList.toggle('element__btn-like_active'));
  elementsList.prepend(element);


  // elementImage.addEventListener('click', () => {
  //   openPopupImage(elementLink, elementName)
  // });

  // element.querySelector('.element__trash').addEventListener('click', function (evt) {
  //   evt.target.closest('._element').remove();
  // });

}


// function openPopupImage(imageLink, imageTitle) {
//   openPopup(popupImg);
//   popupImgImage.setAttribute('src', imageLink);
//   popupImageTitle.textContent = imageTitle;
// };

//3. Actions
profilePopupCloseButton.addEventListener('click', ()=> {closePopup(profilePopup)});
profileEditButton.addEventListener('click', ()=> {loadEditProfileForm(profilePopup)});
profilePopupForm.addEventListener('submit', saveEditProfileForm);
profilePopup.addEventListener('click', function (evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(profilePopup);
  }
})

initialCards.reverse().forEach(item => loadElements(item.name, item.link));








