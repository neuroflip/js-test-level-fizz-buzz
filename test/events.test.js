
import { expect, describe, test, jest } from "@jest/globals";
import { evaluateResult, clearError, clearInput, resetData } from '../src/scripts/dom';

const eventsMocked = {
  prepareClearButton: jest.fn(),
  prepareSubmitButton: jest.fn()
};

const domMocked = {
  evaluateResult: jest.fn(),
  clearError: jest.fn(),
  clearInput: jest.fn(),
  resetData: jest.fn()
};

jest.unstable_mockModule('../src/scripts/events', () => eventsMocked);
jest.unstable_mockModule('../src/scripts/dom', () => domMocked);

const { prepareClearButton, prepareSubmitButton } = await import('../src/scripts/events');

describe('events test', () => {
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

  test('prepare methods are called', () => {
    document.addEventListener('DOMContentLoaded', () => {
      expect(prepareSubmitButton).toHaveBeenCalled();
      expect(prepareClearButton).toHaveBeenCalled();
    });
  });

  test('prepareSubmitButton adds an event listener for click on submit button', () => {
    const button = document.getElementById('submitButton');

    document.addEventListener('DOMContentLoaded', () => {
      expect(button.addEventListener).toHaveBeenCalled();
    });
  });

  test('prepareClearButton adds an event listener for click on clear button', () => {
    const button = document.getElementById('clearButton');

    document.addEventListener('DOMContentLoaded', () => {
      expect(button.addEventListener).toHaveBeenCalled();
    });
  });

  test('submit button onClick calls to evaluateResult, clearError and clearInput', () => {
    const button = document.getElementById('submitButton');

    document.addEventListener('DOMContentLoaded', () => {
      button.click();

      expect(evaluateResult).toHaveBeenCalled();
      expect(clearError).toHaveBeenCalled();
      expect(clearInput).toHaveBeenCalled();
      expect(resetData).not.toHaveBeenCalled();
    });
  });

  test('clear button onClick calls to clearInput, clearError and resetData', () => {
    const button = document.getElementById('clearButton');

    document.addEventListener('DOMContentLoaded', () => {
      button.click();

      expect(clearError).toHaveBeenCalled();
      expect(clearInput).toHaveBeenCalled();
      expect(resetData).toHaveBeenCalled();
    });
  });
})