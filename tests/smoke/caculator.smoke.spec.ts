import { test, expect } from '../../fixtures/testFixture';

test.describe('Smoke Suite', () => {

  test('@smoke Calculator launches', async ({ calculator }) => {

    await expect(
      calculator.display
    ).toBeVisible();

  });

  test('@smoke Addition works', async ({ calculator }) => {

    await calculator.clickSequence([
      '1',
      '+',
      '2',
      '='
    ]);

    await expect(
      calculator.display
    ).toHaveValue('3');
  });

  test('@smoke Clear button works', async ({ calculator }) => {

    await calculator.clickSequence([
      '1',
      '2'
    ]);

    await calculator.clearBtn.click();

    await expect(
      calculator.display
    ).toHaveValue('');
  });

});