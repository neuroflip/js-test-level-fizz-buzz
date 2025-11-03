/**
 * Responsabilidad: gestionar el los flujos de que recibe y muestra la interfáz
 * */ 

import { fizzBuzz, OK , KO } from "./fizzBuzz.js";

const resultsData = [];

const clearError = () => {
  const errorDiv = document.getElementById('error');

  errorDiv.textContent = '';
}

const clearInput = () => {
  const input = document.getElementById('numberValue');

  input.value = '';
}

const evaluateResult = () => {
  const numberInput = document.getElementById('numberValue');
  const number = numberInput.value;
  const result = fizzBuzz(Number(number)); 
  const resultDiv = document.getElementById('result');

  resultsData.push(result);

  if (result.status === OK) {
      resultDiv.innerHTML += `${result.data.number}: ${result.data.result}<br />`;
  } else {
    const errorDiv = document.getElementById('error');

    resultDiv.innerHTML += `${result.data.number}: ${result.data.result}<br />`;
    errorDiv.textContent = result.message;
  }
}

export { evaluateResult, clearError, clearInput };

