import { expect, describe, test, jest } from "@jest/globals";
//import { evaluateResult, clearError, clearInput } from '../src/scripts/dom';

let fizzBuzzMocked = {
  fizzBuzz: jest.fn()
    .mockReturnValueOnce({
      status: 'Ok',
      message: 'El número es divisible por 5',
      data: {
          number: 100,
          result: 'Buzz'
      }
    })
    .mockReturnValueOnce({
      status: 'Ok',
      message: 'El número es divisible por 5',
      data: {
          number: 100,
          result: 'Buzz'
      }
    })
    .mockReturnValue({
      status: 'Ko',
      message: 'El número no es divisible por 3 ni por 5',
      data: {
          number: 7,
          result: 7
      }
    }),
  KO: 'Ko',
  OK: 'Ok'
};

jest.unstable_mockModule('../src/scripts/fizzBuzz', () => fizzBuzzMocked);

const { fizzBuzz } = await import('../src/scripts/fizzBuzz');
const { evaluateResult, clearError, clearInput } = await import('../src/scripts/dom');

describe('dom test', () => {
  beforeEach(() => {
    document.body.innerHTML = `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>FizzBuzz DOM</title>
      </head>
      <body>
        <form>
          <label for="numberValue">Please introduce a number value:</label>
          <input id="numberValue">
          <div id="error"></div>
          <button id="submitButton">Evaluate</button>
          <button id="clearButton">Clear</button>
        </form>
        <div id="result"></div>
      </body>
      </html>`;
  });

  test('clearError cleans the error content', () => {
    const errorDiv = document.getElementById('error');

    errorDiv.textContent = 'This is a previous error';
    clearError();

    expect(errorDiv.textContent).toBe('');
  });

  test('clearInput cleans the inpuit value', () => {
    const input = document.getElementById('numberValue');

    input.value = '100';
    clearInput();

    expect(input.value).toBe('');
  });

  test('evaluateResult calls to the fizzBuzz method to get the result', () => {
    const input = document.getElementById('numberValue');

    input.value = '100';
    evaluateResult();

    expect(fizzBuzz).toHaveBeenCalledWith(100);
  });

  test('evaluateResult sets the correct result at resultDiv', () => {
    const input = document.getElementById('numberValue');
    const resultDiv = document.getElementById('result');

    input.value = '100';
    evaluateResult();

    expect(resultDiv.textContent).toBe('100: Buzz');
  })

  test('evaluateResult sets the error when there is an error', () => {
    const input = document.getElementById('numberValue');
    const errorDiv = document.getElementById('error');
    const resultDiv = document.getElementById('result');

    input.value = '7';
    evaluateResult();

    expect(errorDiv.textContent).toBe('El número no es divisible por 3 ni por 5');
    expect(resultDiv.textContent).toBe('7: 7');
  })
})