import { expect, describe, test, jest } from "@jest/globals";
import { evaluateResult, clearError, clearInput } from '../src/scripts/dom'
import jsdom from 'jsdom';
import { TextEncoder, TextDecoder } from 'util';

const { JSDOM } = jsdom;
Object.assign(global, { TextDecoder, TextEncoder });

describe('dom test', () => {
  beforeEach(() => {
    jest.resetModules();

    const dom = new JSDOM(`
      <!DOCTYPE html>
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
      </html>
    `, { runScripts: "dangerously" });
  });

  test('clearError cleans the error content', () => {
    const errorDiv = dom.window.document.getElementById('error');

    errorDiv.textContent = 'This is a previous error';
    clearError();

    expect(errorDiv.textContent).toBe('');
  });

  test('clearInout cleans the inpuit value', () => {
  });

  test('evaluateResult sets the result in results div', () => {
  });
})