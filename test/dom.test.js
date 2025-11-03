import { expect, describe, test } from "@jest/globals";
import {evaluateResult, clearError, clearInput } from '../src/scripts/dom'

describe('dom test', () => {
  test('clearError cleans the error content', () => {
    /*document.body.innerHtml = '<div id="error"></div>';
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = 'This is a previous error';
    clearError();

    expect(errorDiv.textContent).toBe('');
    */
  });

  test('clearInout cleans the inpuit value', () => {
  });

  test('evaluateResult sets the result in results div', () => {
  });
})