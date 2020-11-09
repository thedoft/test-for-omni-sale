export default class Form {
  constructor({ formElement, handleSubmitButton }) {
    this._form = formElement;
    this._backButton = this._form.querySelector('.form__back-button');
    this._handleSubmitButton = handleSubmitButton;
  }

  _getInputValues() {
    this._inputList = this._form.querySelectorAll('.form__input');
    this._formValues = {};

    this._inputList.forEach(input => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setEventListeners() {
    this._form.addEventListener('submit', evt => {
      evt.preventDefault();

      this._handleSubmitButton(this._getInputValues());
    });
  }
}
