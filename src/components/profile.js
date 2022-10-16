import {
  patchProfile,
  patchAvatar
} from "./api";

import {
  profileTitleValue,
  profileSubtitleValue,
  profilePopupInputTitle,
  profilePopupInputSubtitle,
  avatarPopupForm,
  profileSubmitButton,
  avatarSubmitButton,
  profileAvatar,
  avatarPopup,
  profilePopup
} from "./const"

import {
  closePopup,
  openPopup
} from "./modal";

import {
  showSaveStatus
} from "./utils";

function patchProfileData(name, about) {
  showSaveStatus(true, profileSubmitButton);
  patchProfile(name, about)
    .then((data) => {
      profileTitleValue.textContent = data.name;
      profileSubtitleValue.textContent = data.about;
      closePopup(profilePopup);
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      showSaveStatus(false, profileSubmitButton);
    });
}

function patchAvatarImage(link) {
  showSaveStatus(true, avatarSubmitButton);
  patchAvatar(link)
    .then((data) => {
      avatarPopupForm.reset();
      profileAvatar.src = data.avatar;
      closePopup(avatarPopup);
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      showSaveStatus(false, avatarSubmitButton);
    });
}

function loadEditProfileForm(popup) { // open edit profile popup
  profilePopupInputTitle.value = profileTitleValue.textContent;
  profilePopupInputSubtitle.value = profileSubtitleValue.textContent;
  openPopup(popup);
}

export {
  loadEditProfileForm,
  patchProfileData,
  patchAvatarImage

}
