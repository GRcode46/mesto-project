const popup = document.querySelector('.popup');
console.log(popup);

const popupProfileForm = document.querySelector('.popup__form');
console.log(popupProfileForm);

//TODO Add Element from
// const popupAddElement = document.querySelector('.popup__form');
// console.log(popupAddElement);


const profile = document.querySelector('.profile');
console.log(profile);

const popupProfileInputTitle = popupProfileForm.querySelector('#popup-profile-title');
console.log(popupProfileInputTitle);

const popupProfileInputSubtitle = popupProfileForm.querySelector('#popup-profile-subtitle');
console.log(popupProfileInputSubtitle);

const popupProfileCloseButton = popupProfileForm.querySelector('.popup__btn-close');
console.log(popupProfileCloseButton);

const popupProfileSaveButton = popupProfileForm.querySelector('.popup__btn-account-submit');
console.log(popupProfileSaveButton);

const ProfileEditButton = profile.querySelector('.profile__btn-edit');
console.log(ProfileEditButton);



//let toggleEditProfileForm = () => popup.classList.toggle('popup_opened');
let openEditProfileForm = () => popup.classList.add('popup_opened');
let closeEditProfileForm = () => popup.classList.remove('popup_opened');

popupProfileCloseButton.addEventListener('click', closeEditProfileForm);
ProfileEditButton.addEventListener('click', openEditProfileForm);


popupProfileForm.addEventListener('submit',  function () {
  console.log('test')
} );
