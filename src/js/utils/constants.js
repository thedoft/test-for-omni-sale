export const formElement = document.querySelector('.form'),
phoneInput = document.querySelector('.form__input_type_phone'),
passwordInput = document.querySelector('.form__input_type_password'),
passwordMask = document.querySelector('.form__password-mask'),
maskElement = '<span class="form__password-star"></span>',
maskElementSelector = '.form__password-star',
configObject = {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit',
  disabledButtonClass: 'form__submit_disabled',
  validInputClass: 'form__input_is-valid_true',
  invalidInputClass: 'form__input_is-valid_false'
};
