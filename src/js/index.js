import {
  formElement,
  passwordInput,
  passwordMask,
  maskElement,
  maskElementSelector,
  configObject
} from './utils/constants.js';
import { maskPhone } from './utils/maskPhone.js';
import { maskPassword } from './utils/maskPassword.js';
import Form from './components/Form.js';
import FormValidator from './components/FormValidator.js';

maskPhone();
maskPassword(
  passwordInput,
  passwordMask,
  maskElement,
  maskElementSelector
);

const formValidator = new FormValidator({ formElement, configObject });
formValidator.enableValidation();

formElement.setAttribute('novalidate', true);

const form = new Form({
  formElement,
  handleSubmitButton: (formValues) => {
    formValues.phone = formValues.phone.match(/\d/g).join('');

    const phone = formValues.phone,
    password = formValues.password;

    fetch('https://example.com/auth', {
      method: 'POST',
      headers: {
        authorization: `${phone} ${password}`,
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    }).catch(err => {
      console.log(err);
    })
  }
});
form.setEventListeners();
