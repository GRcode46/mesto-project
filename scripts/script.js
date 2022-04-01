const popup = document.querySelector('.popup');
console.log(popup);

const popupForm = document.querySelector('.popup__form');
console.log(popupForm);

const profile = document.querySelector('.profile');
console.log(profile);

const popupInputProfileTitle = popupForm.querySelector('#popup-profile-title');
console.log(popupInputProfileTitle);

const popupInputProfileSubtitle = popupForm.querySelector('#popup-profile-subtitle');
console.log(popupInputProfileSubtitle);

const popupProfileCloseButton = popupForm.querySelector('.popup__btn-close');
console.log(popupProfileCloseButton);

const profileSaveButton = popupForm.querySelector('.popup__btn-account-submit');
console.log(profileSaveButton);

const popupProfileEditButton = profile.querySelector('.profile__btn-edit');
console.log(popupProfileEditButton);


azaza = popupInputProfileSubtitle.hasAttribute('disabled');
console.log(azaza);

if (azaza) {
  popup.classList.remove('popup_opened');
} else {
  console.log('выкл');
}

popupProfileCloseButton.addEventListener('click', closeEditProfileForm);
popupProfileEditButton.addEventListener('click', openEditProfileForm);

function closeEditProfileForm() {
  popup.classList.remove('popup_opened');
}

function openEditProfileForm() {
  popup.classList.add('popup_opened');
}

// const element = document.querySelector('.element');
// const elementButtonLike = element.querySelector('.element__btn-like');
// if (elementButtonLike.classList.contains('element__btn-like'))
