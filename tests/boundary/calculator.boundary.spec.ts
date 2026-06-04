import { test, expect } from '../../fixtures/testFixture';

test.describe('Boundary Tests', () => {

  test('@boundary decimal addition', async ({ calculator }) => {

    await calculator.clickSequence([
      '1', '.', '5',
      '+',
      '1', '.', '5',
      '='
    ]);

    await expect(
      calculator.display
    ).toHaveValue('3');
  });

  test('@boundary large number calculation', async ({ calculator }) => {

    await calculator.clickSequence([
      '9','9','9','9','9',
      '+',
      '1',
      '='
    ]);

    await expect(
      calculator.display
    ).toHaveValue('100000');
  });

  test('@boundary empty expression', async ({ calculator }) => {

    await calculator.equalBtn.click();

    const value =
      await calculator.display.inputValue();

    expect(value).not.toBe('');
  });

  test('@boundary consecutive operators', async ({ calculator }) => {

    await calculator.clickSequence([
      '1',
      '+',
      '+',
      '+',
      '2',
      '='
    ]);

    const value =
      await calculator.display.inputValue();

    expect(value.length).toBeGreaterThan(0);
  });

});