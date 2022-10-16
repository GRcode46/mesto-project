import {
  previewImage,
  previewTitle,
  previewPopup,
  profilePopupInputTitle,
  profilePopupInputSubtitle,
  deletePopupBtnSubmit,
  avatarLink,
} from "./const.js"

import {
  patchProfileData,
  patchAvatarImage
} from "./profile.js";


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
  popup.addEventListener('mousedown', closePopupOutsideClick);
}

// Open popup for delete card
function openDeletePopup(popup, elementId) {
  openPopup(popup)
  deletePopupBtnSubmit.setAttribute('data-id', elementId);
}

// Close popup function, add listeners
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  window.removeEventListener('keydown', closePopupEscButton);
  popup.removeEventListener('mousedown', closePopupOutsideClick);
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
  patchProfileData(profilePopupInputTitle.value, profilePopupInputSubtitle.value);


}

// Save avatar image
function saveAvatarForm(evt) {
  evt.preventDefault();
  patchAvatarImage(avatarLink.value);

}


export {
  openPopup,
  closePopup,
  openPopupImage,
  closePopupOutsideClick,
  closePopupEscButton,
  saveEditProfileForm,
  openDeletePopup,
  saveAvatarForm
}
