// FormValidator class

export default class FormValidator {
  constructor(selector, form) {
    this._selector = selector;
    this._form = form;
    this._inputList = Array.from(
      this._form.querySelectorAll(this._selector.inputSelector)
    );
    this._submitButton = this._form.querySelector(
      this._selector.submitButtonSelector
    );
  }

  setInitialState() {
    this._toggleButtonState();
    this._inputList.forEach((input) => {
      this._hideError(input);
    });
  }

  _isValid(input) {
    if (!input.validity.valid) {
      this._showError(input, input.validationMessage);
    } else {
      this._hideError(input);
    }
  }

  _showError(input, errorMessage) {
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._selector.errorClass);
    input.classList.add(this._selector.inputErrorClass);
  }

  _hideError(input) {
    const errorElement = this._form.querySelector(`.${input.id}-error`);
    errorElement.textContent = "";
    errorElement.classList.remove(this._selector.errorClass);
    input.classList.remove(this._selector.inputErrorClass);
  }

  _hasInvalidInput(inputList) {
    return inputList.some((input) => {
      return !input.validity.valid;
    });
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList)) {
      this._submitButton.disabled = true;
      this._submitButton.classList.add(this._selector.inactiveButtonClass);
    } else {
      this._submitButton.disabled = false;
      this._submitButton.classList.remove(this._selector.inactiveButtonClass);
    }
  }

  _validationHandler(input) {
    this._isValid(input);
    this._toggleButtonState();
  }

  _setEventListener() {
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._validationHandler(input);
      });
      this._toggleButtonState();
    });
  }

  enableValidation() {
    this._setEventListener();
  }
}
