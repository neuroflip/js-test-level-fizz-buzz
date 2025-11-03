import { expect, describe, test } from "@jest/globals";
import { prepareSubmitButton, prepareclearButton } from '../src/scripts/events';

describe('events test', () => {
  test('prepare methods are called', () => {
    jest.spyOn(prepareSubmitButton);
    jest.spyOn(prepareclearButton);

    expect(prepareSubmitButton).toHaveBeenCalled();
    expect(prepareclearButton).toHaveBeenCalled();
  });
})