import { test, expect } from '../../fixtures/testFixture';

test.describe('Regression Suite', () => {

  test('@regression subtraction', async ({ calculator }) => {

    await calculator.clickSequence([
      '5',
      '−',
      '2',
      '='
    ]);

    await expect(
      calculator.display
    ).toHaveValue('3');
  });

  test('@regression multiplication', async ({ calculator }) => {

    await calculator.clickSequence([
      '4',
      '×',
      '5',
      '='
    ]);

    await expect(
      calculator.display
    ).toHaveValue('20');
  });

  test('@regression division', async ({ calculator }) => {

    await calculator.clickSequence([
      '8',
      '÷',
      '2',
      '='
    ]);

    await expect(
      calculator.display
    ).toHaveValue('4');
  });

  test('@regression digit three', async ({ calculator }) => {

    await calculator.digit('3').click();

    await expect(
      calculator.display
    ).toHaveValue('3');
  });

  test('@regression sin zero', async ({ calculator }) => {

    await calculator.digit('0').click();

    await calculator.sinBtn.click();

    await expect(
      calculator.display
    ).toHaveValue('0');
  });

});