/**
 * Responsabilidad: gestionar el los flujos de que recibe y muestra la interfáz
 * */ 

import { getResult, OK , KO } from "./fizzBuzz.js";


const clearError = () => {
  const errorDiv = document.getElementById('error');

  errorDiv.textContent = '';
}

const evaluateResult = () => {
  const numberInput = document.getElementById('numberValue');
  const number = numberInput.value;
  const result = getResult(number); 
  const resultDiv = document.getElementById('result');

  if (result.status === OK) {
      resultDiv.innerHTML += result.data.result + '<br />';
  } else {
    const errorDiv = document.getElementById('error');

    errorDiv.textContent = result.message;
  }
}

export { evaluateResult, clearError };

