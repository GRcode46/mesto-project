// Create UserInfo class
import {selectors} from "../vendor/const";

export default class UserInfo {
  constructor() {
    this._name = document.querySelector(selectors.profileTitleSelector);
    this._about = document.querySelector(selectors.profileSubtitleSelector);
    this._avatar = document.querySelector(selectors.profileAvatarSelector);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent
    };
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._about.textContent = data.about;
  }

  setUserAvatar(data) {
    this._avatar.src = data.avatar;
  }
}
