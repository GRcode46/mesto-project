import {
  getRequest,
  patchRequest
} from "./api";

import {
  profileTitleValue,
  profileSubtitleValue,
  profileAvatar,
  profilePopupInputTitle,
  profilePopupInputSubtitle,
  userData,
  userDataPath,
  avatarPopupForm,
  profileSubmitButton, avatarSubmitButton
} from "./const"

import {
  openPopup
} from "./modal";

import {
  showLoadingStatus
} from "./utils";

function getProfileAvatar(path) {
  getRequest(path)
    .then((data) => {
      profileAvatar.src = data.avatar;
      // console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
}


function getProfileData(path) {
  getRequest(path)
    .then((data) => {
      profileTitleValue.textContent = data.name;
      profileSubtitleValue.textContent = data.about;
      userData.id = data._id;
    })
    .catch((err) => {
      console.log(err)
    })
}

function patchProfileData(path, body) {
  showLoadingStatus(true, profileSubmitButton);
  patchRequest(path, body)
    .then((data) => {
      profileTitleValue.textContent = data.name;
      profileSubtitleValue.textContent = data.about;
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      showLoadingStatus(false, profileSubmitButton);
    });
}


function patchAvatarImage(path, body) {
  showLoadingStatus(true, avatarSubmitButton);
  patchRequest(path, body)
    .then(() => {
      avatarPopupForm.reset();
      getProfileAvatar(userDataPath)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      showLoadingStatus(false, avatarSubmitButton);
    });
}

function getProfile(path) {
  getProfileData(path)
  getProfileAvatar(path)
}

function loadEditProfileForm(popup) { // open edit profile popup
  profilePopupInputTitle.value = profileTitleValue.textContent;
  profilePopupInputSubtitle.value = profileSubtitleValue.textContent;
  openPopup(popup);
}


export {
  getProfile,
  getProfileData,
  getProfileAvatar,
  loadEditProfileForm,
  patchProfileData,
  patchAvatarImage

}
