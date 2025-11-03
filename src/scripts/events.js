/**
 * Responsabilidad: gestionar los eventos
 * */ 

import { evaluateResult, clearError } from './dom.js';

const prepareSubmitButton = () => {
  const button = document.getElementById('submitButton');

  button.addEventListener('click', (event) => {
    event.preventDefault();

    clearError();
    evaluateResult();
  });
}

const prepareClearButton = () => {
  const button = document.getElementById('submitButton');

  button.addEventListener('click', (event) => {
    event.preventDefault();

    clearError();
  });
}

prepareSubmitButton();
prepareClearButton();