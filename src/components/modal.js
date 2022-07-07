import {
  previewImage,
  previewTitle,
  previewPopup,
  profilePopupInputTitle,
  profileTitleValue,
  profilePopupInputSubtitle,
  profileSubtitleValue,
  profilePopup
} from "./const.js"

function closePopupOutsideClick(evt) { // close any popup over outside click
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

function closePopupEscButton(evt) {
  if (evt.key === 'Escape') {
    const targetPopup = document.querySelector('.popup_opened')
    closePopup(targetPopup);
  }
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
  window.addEventListener('keydown', closePopupEscButton);
  popup.addEventListener('click', closePopupOutsideClick);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  window.removeEventListener('keydown', closePopupEscButton);
  popup.removeEventListener('click', closePopupOutsideClick);

}

function openPopupImage(imageLink, imageTitle) { //open preview image popup
  openPopup(previewPopup);
  previewImage.setAttribute('src', imageLink);
  previewTitle.textContent = imageTitle;
  previewImage.setAttribute('alt', imageTitle);
}

// function loadEditProfileForm(popup) { // open edit profile popup
//   profilePopupInputTitle.value = profileTitleValue.textContent;
//   profilePopupInputSubtitle.value = profileSubtitleValue.textContent;
//   openPopup(popup);
// }

function saveEditProfileForm(evt) { // Save edit profile form
  evt.preventDefault();
  profileTitleValue.textContent = profilePopupInputTitle.value;
  profileSubtitleValue.textContent = profilePopupInputSubtitle.value;
  closePopup(profilePopup);
}

export {
  openPopup,
  closePopup,
  openPopupImage,
  closePopupOutsideClick,
  closePopupEscButton,
  // loadEditProfileForm,
  saveEditProfileForm
}
