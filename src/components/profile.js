import {getRequest, patchRequest} from "./api";
import {
  profileTitleValue,
  profileSubtitleValue,
  profileAvatar,
  profilePopupInputTitle,
  profilePopupInputSubtitle
} from "./const.js"
import {openPopup} from "./modal";

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
    })
    .catch((err) => {
      console.log(err)
    })
}

function patchProfileData(path, body) {
  patchRequest(path, body)
    .then((data) => {
      profileTitleValue.textContent = data.name;
      profileSubtitleValue.textContent = data.about;
    })
    .catch((err) => {
      console.log(err)
    })
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

export {getProfile, getProfileData, getProfileAvatar, loadEditProfileForm, patchProfileData}
