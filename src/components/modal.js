import {
  previewImage,
  previewTitle,
  previewPopup,
  profilePopupInputTitle,
  profilePopupInputSubtitle,
  profilePopup,
  userDataPath,
  deletePopupBtnSubmit
} from "./const.js"

import {
  getProfileData,
  patchProfileData
} from "./profile.js";

import {deleteElement} from "./cards";

// Close any popup over outside click
function closePopupOutsideClick(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

// Close popup over press ESC
function closePopupEscButton(evt) {
  if (evt.key === 'Escape') {
    const targetPopup = document.querySelector('.popup_opened')
    closePopup(targetPopup);
  }
}

// Open popup function, add listeners
function openPopup(popup) {
  popup.classList.add('popup_opened');
  window.addEventListener('keydown', closePopupEscButton);
  popup.addEventListener('click', closePopupOutsideClick);
}

// Open popup for delete card
function openDeletePopup(popup, elementId) {
  openPopup(popup)
  deletePopupBtnSubmit.setAttribute('data-id', elementId);
  // console.log(data)
}

// Close popup function, add listeners
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  window.removeEventListener('keydown', closePopupEscButton);
  popup.removeEventListener('click', closePopupOutsideClick);
}

// Open image preview popup
function openPopupImage(imageLink, imageTitle) {
  openPopup(previewPopup);
  previewImage.src = imageLink;
  previewTitle.textContent = imageTitle;
  previewImage.alt = imageTitle;
}

// Save profile changes
function saveEditProfileForm(evt) {
  evt.preventDefault();
  const profileNewData = {
    name: profilePopupInputTitle.value,
    about: profilePopupInputSubtitle.value
  }
  patchProfileData(userDataPath, profileNewData);
  closePopup(profilePopup);

}

export {
  openPopup,
  closePopup,
  openPopupImage,
  closePopupOutsideClick,
  closePopupEscButton,
  saveEditProfileForm,
  openDeletePopup
}
