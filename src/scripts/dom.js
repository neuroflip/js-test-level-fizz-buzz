import { fizzBuzz, OK , KO } from "./fizzBuzz.js";

let resultsData = [];

const clearError = () => {
  const errorDiv = document.getElementById('error');

  errorDiv.textContent = '';
}

const clearInput = () => {
  const input = document.getElementById('numberValue');

  input.value = '';
}

const resetData = () => {
  resultsData = [];
  setResultsInDiv();
}

const setResultsInDiv = () => {
  const resultDiv = document.getElementById('result');
  let result = '';

  resultsData.forEach((element) => {
    result += `${element.data.number}: ${element.data.result}<br />`
  })
  resultDiv.innerHTML = result;
}

const evaluateResult = () => {
  const numberInput = document.getElementById('numberValue');
  const result = fizzBuzz(numberInput.value); 

  resultsData.push(result);

  if (result.status === KO) {
    const errorDiv = document.getElementById('error');
    
    errorDiv.textContent = result.message;
  }
  setResultsInDiv();
}

export { evaluateResult, clearError, clearInput, resetData };

