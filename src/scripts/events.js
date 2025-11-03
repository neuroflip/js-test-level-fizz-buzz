import { evaluateResult, clearError, clearInput } from './dom.js';

const prepareSubmitButton = () => {
  const button = document.getElementById('submitButton');

  button.addEventListener('click', (event) => {
    event.preventDefault();

    clearError();
    evaluateResult();
    clearInput();
  });
}

const prepareClearButton = () => {
  const button = document.getElementById('clearButton');

  button.addEventListener('click', (event) => {
    event.preventDefault();

    clearError();
    clearInput();
  });
}

document.addEventListener("DOMContentLoaded", () => { 
  prepareSubmitButton();
  prepareClearButton();
})

export { prepareClearButton, prepareSubmitButton };