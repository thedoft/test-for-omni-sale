export const maskPassword = (
  passwordInput,
  passwordMask,
  maskElement,
  maskElementSelector
) => {
  passwordInput.style.color = 'transparent';

  passwordInput.addEventListener('keydown', evt => {
    const maskElements = Array.from(passwordMask.querySelectorAll(maskElementSelector));

    if ((evt.key === 'Backspace') && (maskElements[maskElements.length - 1] !== undefined)) {
      maskElements[maskElements.length -1].remove();
    }
  });

  passwordInput.addEventListener('keypress', evt => {
    if (evt.key !== 'Enter') {
      passwordMask.insertAdjacentHTML('beforeend', maskElement);
    }
  });
}
