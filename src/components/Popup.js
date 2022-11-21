export default class Popup {
  static classes = {
    popupClass: "popup",
    popupOpened: "popup_opened",
  };

  static selectors = {
    popupCloseButton: '.button__popup-close'

  }

  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closePopupEsc = this._closePopupEsc.bind(this);
    this._closePopupOverlay = this._closePopupOverlay.bind(this);
  }

  openPopup() {
    this._popup.classList.add(Popup.classes.popupOpened);
    document.addEventListener("keydown", this._closePopupEsc);
    this._popup.addEventListener("mousedown", this._closePopupOverlay);
  }

  closePopup() {
    this._popup.classList.remove(Popup.classes.popupOpened);
    document.removeEventListener("keydown", this._closePopupEsc);
    this._popup.removeEventListener("mousedown", this._closePopupOverlay);
  }

  _closePopupEsc(evt) {
    if (evt.key === "Escape") {
      this.closePopup();
    }
  }

  _closePopupOverlay(evt) {
    if (evt.target.classList.contains(Popup.classes.popupClass)) {
      this.closePopup();
    }
  }

  setEventListeners() {
    this._popup
      .querySelector(Popup.selectors.popupCloseButton)
      .addEventListener("click", () => this.closePopup());
  }
}
