import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  static selectors = {
    popupPreviewImageSelector: ".popup-preview__image",
    popupPreviewTitleSelector: ".popup-preview__title",
  };

  constructor(popupSelector) {
    super(popupSelector);
    this._popupPreviewImage = this._popup.querySelector(
      PopupWithImage.selectors.popupPreviewImageSelector
    );
    this._popupPreviewTitle = this._popup.querySelector(
      PopupWithImage.selectors.popupPreviewTitleSelector
    );
  }

  openPopup({name, link}) {
    this._popupPreviewTitle.textContent = name;
    this._popupPreviewImage.src = link;
    this._popupPreviewImage.alt = name;
    super.openPopup();
  }

}
