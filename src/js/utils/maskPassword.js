export const maskPassword = (
  input,
  maskContainer,
  maskElement,
  maskElementSelector
) => {
  input.addEventListener('keydown', evt => {
    const maskElements = Array.from(maskContainer.querySelectorAll(maskElementSelector));

    if ((evt.key === 'Backspace') && (maskElements[maskElements.length - 1] !== undefined)) {
      maskElements[maskElements.length -1].remove();
    }
  });

  input.addEventListener('keypress', evt => {
    if (evt.key !== 'Enter') {
      maskContainer.insertAdjacentHTML('beforeend', maskElement);
    }
  });
}
