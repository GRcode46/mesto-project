// Create UserInfo class
export default class UserInfo {
  static selectors = {
    profileTitleSelector: '.profile__title',
    profileSubtitleSelector: '.profile__subtitle',
    profileAvatarSelector: '.profile__avatar'
  }

  constructor() {
    this._name = document.querySelector(UserInfo.selectors.profileTitleSelector);
    this._about = document.querySelector(UserInfo.selectors.profileSubtitleSelector);
    this._avatar = document.querySelector(UserInfo.selectors.profileAvatarSelector);
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
