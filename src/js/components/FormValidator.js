export default class FormValidator {
  constructor({ formElement, configObject }) {
    this._form = formElement;
    this._inputSelector = configObject.inputSelector;
    this._submitButtonSelector = configObject.submitButtonSelector;
    this._disabledButtonClass = configObject.disabledButtonClass;
    this._validInputClass = configObject.validInputClass;
    this._invalidInputClass = configObject.invalidInputClass;
  }

  _hasInvalidInput(inputList) {
    return inputList.some(input => {
      return !input.validity.valid;
    });
  }

  _isValid(input) {
    if (!input.classList.contains('form__input_type_password')) {
      if (!input.validity.valid) {
        input.classList.remove(this._validInputClass);
        input.classList.add(this._invalidInputClass);
      } else {
        input.classList.remove(this._invalidInputClass);
        input.classList.add(this._validInputClass);
      }
  }
  }

  _toggleButtonState(inputList, button) {
    if (this._hasInvalidInput(inputList)) {
      button.classList.add(this._disabledButtonClass);
      button.setAttribute('disabled', true);
    } else {
      button.classList.remove(this._disabledButtonClass);
      button.removeAttribute('disabled', true);
    }
  }

  enableValidation() {
    const inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    const button = this._form.querySelector(this._submitButtonSelector);

    this._toggleButtonState(inputList, button);

    inputList.forEach(input => {
      input.addEventListener('input', () => {
        this._isValid(input);
        this._toggleButtonState(inputList, button);
      });
    });
  }
}
