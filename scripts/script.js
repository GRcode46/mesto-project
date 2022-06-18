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

const profilePopup = document.querySelector('#popup-profile');
const profilePopupForm = document.querySelector('#profile-popup-form');
const profilePopupInputTitle = profilePopupForm.querySelector('#popup-profile-title');
const profilePopupInputSubtitle = profilePopupForm.querySelector('#popup-profile-subtitle');
const profilePopupButtonClose = profilePopupForm.querySelector('#profile-btn-close');

const elementPopup = document.querySelector('#popup-element');
const elementPopupButtonOpen = document.querySelector('.profile__btn-add');
const elementPopupButtonClose = document.querySelector('#card-btn-close');
const elementName = document.querySelector('#element-name');
const elementLink = document.querySelector('#element-url');
const elementsList = document.querySelector('.elements__list');
const elementTemplate = document.querySelector('#element-template').content;

const profile = document.querySelector('.profile');
const profileButtonEdit = profile.querySelector('.profile__btn-edit');
const profileTitleValue = profile.querySelector('.profile__title');
const profileSubtitleValue = profile.querySelector('.profile__subtitle');

const previewPopup = document.querySelector('#popup-preview');
const previewImage = previewPopup.querySelector('.popup-preview__image');
const previewTitle = previewPopup.querySelector('.popup-preview__title');
const previewPopupButtonClose = document.querySelector('#preview-btn-close');


//2. Functions
const openPopup = (popup) => popup.classList.add('popup_opened'); // open edit profile popup
const closePopup = (popup) => popup.classList.remove('popup_opened'); // close edit profile popup
const closePopupOutsideClick = function (evt) { // close any popup over outside click
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}
const loadEditProfileForm = function (popup) { // open edit profile popup
  profilePopupInputTitle.value = profileTitleValue.textContent;
  profilePopupInputSubtitle.value = profileSubtitleValue.textContent;
  openPopup(popup);
}
const saveEditProfileForm = function (evt) { // Save edit profile form
  evt.preventDefault();
  profileTitleValue.textContent = profilePopupInputTitle.value;
  profileSubtitleValue.textContent = profilePopupInputSubtitle.value;
  closePopup(profilePopup);
}

function loadElements(elementName, elementLink) { // create element node
  const element = elementTemplate.querySelector('.element').cloneNode(true);
  const likeBtn = element.querySelector('.element__btn-like');
  const elementImage = element.querySelector('.element__image');
  const elementTrash = element.querySelector('.element__trash');

  element.querySelector('.element__name').textContent = elementName;
  elementImage.src = elementLink;
  elementImage.alt = elementName;
  likeBtn.addEventListener("click", () => likeBtn.classList.toggle('element__btn-like_active'));

  elementImage.addEventListener('click', () => { //add preview action for new elements from array
    openPopupImage(elementLink, elementName)
  });

  elementTrash.addEventListener('click', function (evt) {
    evt.target.closest('.element').remove();
  });
  return element;
}

function renderElement(element) { //render elements
  elementsList.prepend(element);
}

function openPopupImage(imageLink, imageTitle) { //open preview image popup
  openPopup(previewPopup);
  previewImage.setAttribute('src', imageLink);
  previewTitle.textContent = imageTitle;
  previewImage.setAttribute('alt', imageTitle);
}

function createElement(evt) { //add image from popup
  evt.preventDefault();
  renderElement(loadElements(elementName.value, elementLink.value));
  elementName.value = '';
  elementLink.value = '';
  closePopup(elementPopup);
}

//3. Global actions
profilePopupButtonClose.addEventListener('click', () => {
  closePopup(profilePopup)
});

profileButtonEdit.addEventListener('click', () => {
  loadEditProfileForm(profilePopup)
});

profilePopup.addEventListener('click', closePopupOutsideClick);

profilePopupForm.addEventListener('submit', saveEditProfileForm);

elementPopupButtonClose.addEventListener('click', () => {
  closePopup(elementPopup)
});

elementPopupButtonOpen.addEventListener('click', () => {
  openPopup(elementPopup)
});

elementPopup.addEventListener('click', closePopupOutsideClick);

elementPopup.addEventListener('submit', createElement);

previewPopup.addEventListener('click', closePopupOutsideClick);

previewPopupButtonClose.addEventListener('click', () => {
  closePopup(previewPopup)
})
initialCards.reverse().forEach((element) => {
  renderElement(loadElements(element.name, element.link))
});


//Validation functions


const toggleButtonState = (inputList, buttonElement) => {
  console.log(inputList)
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('button_state_inactive')
  } else {
    buttonElement.classList.remove('button_state_inactive')
  }
}

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('form__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('form__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('form__input_type_error');
  errorElement.classList.remove('form__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonElement = formElement.querySelector('.popup__btn-account-submit');


  toggleButtonState(inputList, buttonElement);
  // debugger

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      // console.log(inputList)
      // console.log(inputElement)

      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};


const hasInvalidInput = (inputList) => {
  // debugger
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement);
    // console.log(formElement)
  });
};


enableValidation();




