import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  static selectors = {
    form: ".popup__form",
    inputSelector: ".form__input",
    submitButtonSelector: ".popup__btn-submit",
  };

  constructor(popupSelector, submitHandler) {
    super(popupSelector);
    this._submitHandler = submitHandler;
    this._form = this._popup.querySelector(
      PopupWithForm.selectors.form
    );
    this._submitButton = this._form.querySelector(
      PopupWithForm.selectors.submitButtonSelector
    );
    // this._initialSubmitButtonValue = this._submitButton.textContent;

    this._inputList = this._form.querySelectorAll(
      PopupWithForm.selectors.inputSelector
    );
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const initialText = this._submitButton.textContent;
      this._submitButton.textContent = 'Сохранение...';
      this._submitHandler(this._getInputValues())
        .then(() => this.closePopup())
        .catch((err) => console.log(`Error: ${err}`))
        .finally(() => {
          this._submitButton.textContent = initialText;
        });
    })
  }

  closePopup() {
    super.closePopup();
    this._form.reset();
  }
}
