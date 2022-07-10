import {getRequest} from "./api";
import {
  profileTitleValue,
  profileSubtitleValue,
  profileAvatar,
  profilePopupInputTitle,
  profilePopupInputSubtitle
} from "./const.js"
import {openPopup} from "./modal";

function getProfileData(path) {
  getRequest(path)
    .then((data) => {
      profileTitleValue.textContent = data.name;
      profileSubtitleValue.textContent = data.about;
      profileAvatar.src = data.avatar;
      // console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
}


function loadEditProfileForm(popup) { // open edit profile popup
  profilePopupInputTitle.value = profileTitleValue.textContent;
  profilePopupInputSubtitle.value = profileSubtitleValue.textContent;
  openPopup(popup);
}

export {getProfileData, loadEditProfileForm}
