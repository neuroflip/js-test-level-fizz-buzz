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

const setResultInDiv = (text) => {
  const resultDiv = document.getElementById('result');

  resultDiv.innerHTML += text;
}

const evaluateResult = () => {
  const numberInput = document.getElementById('numberValue');
  const result = fizzBuzz(numberInput.value); 

  resultsData.push(result);

  if (result.status === KO) {
    const errorDiv = document.getElementById('error');
    
    errorDiv.textContent = result.message;
  }
  setResultInDiv(`${result.data.number}: ${result.data.result}<br />`);
}

export { evaluateResult, clearError, clearInput };

