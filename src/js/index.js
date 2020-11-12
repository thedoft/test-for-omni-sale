import {
  formElement,
  phoneInput,
  passwordInput,
  passwordMaskContainer,
  maskElement,
  maskElementSelector,
  configObject
} from './utils/constants.js';
import { maskPhone } from './utils/maskPhone.js';
import { maskPassword } from './utils/maskPassword.js';
import Form from './components/Form.js';
import FormValidator from './components/FormValidator.js';

// для корректной работы при отключенном JS
formElement.setAttribute('novalidate', true);
phoneInput.setAttribute('pattern', '[0-9][ -].[ -][0-9]{3}[ -].[ -][0-9]{3}[ -][0-9]{2}[ -][0-9]{2}');
phoneInput.setAttribute('maxlength', 19);
passwordInput.style.color = 'transparent';

maskPhone(phoneInput);
maskPassword(
  passwordInput,
  passwordMaskContainer,
  maskElement,
  maskElementSelector
);

const formValidator = new FormValidator({ formElement, configObject });
formValidator.enableValidation();

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
