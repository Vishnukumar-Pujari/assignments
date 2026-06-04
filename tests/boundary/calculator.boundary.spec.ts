import { test, expect } from '../../fixtures/testFixture';

test.describe('Boundary Tests', () => {

  test(
    '@boundary decimal addition',
    async ({ calculator }) => {

      await calculator.enterExpression(
        '1.5+1.5'
      );

      await calculator.calculate();

      await expect(
        calculator.display
      ).toHaveValue('3');

  });

  test(
    '@boundary large number calculation',
    async ({ calculator }) => {

      await calculator.enterExpression(
        '99999+1'
      );

      await calculator.calculate();

      await expect(
        calculator.display
      ).toHaveValue('100000');

  });

  test(
    '@boundary zero addition',
    async ({ calculator }) => {

      await calculator.enterExpression(
        '0+0'
      );

      await calculator.calculate();

      await expect(
        calculator.display
      ).toHaveValue('0');

  });

  test(
    '@boundary long expression',
    async ({ calculator }) => {

      await calculator.enterExpression(
        '1111111111+1'
      );

      await calculator.calculate();

      await expect(
        calculator.display
      ).toHaveValue('1111111112');

  });

});