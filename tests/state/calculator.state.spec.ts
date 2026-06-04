import { test, expect } from '../../fixtures/testFixture';
import { BUTTONS } from '../../test-data/buttons';

test.describe('State Tests', () => {

  test(
    '@state clear after error',
    async ({ calculator }) => {

      await calculator.clickButton(
        BUTTONS.OPEN_PAREN
      );

      await calculator.calculate();

      await calculator.clear();

      await expect(
        calculator.display
      ).toHaveValue('');

  });

  test(
    '@state multiple calculations',
    async ({ calculator }) => {

      await calculator.performCalculation(
        '1',
        BUTTONS.ADD,
        '1'
      );

      await expect(
        calculator.display
      ).toHaveValue('2');

      await calculator.enterExpression(
        '+2'
      );

      await calculator.calculate();

      await expect(
        calculator.display
      ).toHaveValue('4');

  });

});