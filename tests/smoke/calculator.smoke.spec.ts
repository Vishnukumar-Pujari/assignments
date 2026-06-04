import { test, expect } from '../../fixtures/testFixture';
import { BUTTONS } from '../../test-data/buttons';

test.describe('Smoke Suite', () => {

  test('@smoke Calculator launches',
    async ({ calculator }) => {

      await expect(
        calculator.display
      ).toBeVisible();

  });

  test('@smoke Addition works',
    async ({ calculator }) => {

      await calculator.performCalculation(
        '1',
        BUTTONS.ADD,
        '2'
      );

      await expect(
        calculator.display
      ).toHaveValue('3');

  });

  test('@smoke Clear button works',
    async ({ calculator }) => {

      await calculator.clickButton('1');
      await calculator.clickButton('2');

      await calculator.clear();

      await expect(
        calculator.display
      ).toHaveValue('');

  });

});