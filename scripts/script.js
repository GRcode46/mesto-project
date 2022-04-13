const popup = document.querySelector('.popup');
const popupProfileForm = document.querySelector('.popup__form');
const popupProfileInputTitle = popupProfileForm.querySelector('#popup-profile-title');
const popupProfileInputSubtitle = popupProfileForm.querySelector('#popup-profile-subtitle');
const popupProfileCloseButton = popupProfileForm.querySelector('.popup__btn-close');
const popupProfileSaveButton = popupProfileForm.querySelector('.popup__btn-account-submit');

const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__btn-edit');
const profileTitleValue = profile.querySelector('.profile__title');
const profileSubtitleValue = profile.querySelector('.profile__subtitle');


// Functions

// Close edit profile popup
let openEditProfileForm = () => popup.classList.add('popup_opened');

// Close edit profile popup
let closeEditProfileForm = () => popup.classList.remove('popup_opened');

// Open edit profile popup
let readEditProfileForm = function (){
  popupProfileInputTitle.value = profileTitleValue.textContent;
  popupProfileInputSubtitle.value = profileSubtitleValue.textContent;
  openEditProfileForm();
}


// Save edit profile form
let saveEditProfileForm = function (evt) {
  evt.preventDefault();
  profileTitleValue.textContent = popupProfileInputTitle.value;
  profileSubtitleValue.textContent = popupProfileInputSubtitle.value;
  closeEditProfileForm();
}




// add listeners
popupProfileCloseButton.addEventListener('click', closeEditProfileForm);
profileEditButton.addEventListener('click', readEditProfileForm);
popupProfileForm.addEventListener('submit',  saveEditProfileForm);
