/**
 * Regression Suite
 *
 * These tests intentionally document
 * known application defects.
 *
 * test.fail() is used so that CI remains green
 * while proving the defect exists.
 */


import { test, expect } from '../../fixtures/testFixture';
import { BUTTONS } from '../../test-data/buttons';

test.describe('Regression Suite', () => {

  test(
    '@regression BUG-001 subtraction performs division',
    async ({ calculator }) => {

      test.fail(
        true,
        'Known defect BUG-001'
      );

      await calculator.performCalculation(
        '5',
        BUTTONS.SUBTRACT,
        '2'
      );

      await expect(
        calculator.display
      ).toHaveValue('3');

  });

  test(
    '@regression BUG-002 digit three enters zero',
    async ({ calculator }) => {

      test.fail(
        true,
        'Known defect BUG-002'
      );

      await calculator.clickButton('3');

      await expect(
        calculator.display
      ).toHaveValue('3');

  });

  test(
    '@regression BUG-003 sin returns incorrect value',
    async ({ calculator }) => {

      test.fail(
        true,
        'Known defect BUG-003'
      );

      await calculator.clickButton('0');

      await calculator.clickButton(
        BUTTONS.SIN
      );

      await expect(
        calculator.display
      ).toHaveValue('0');

  });

  test(
    '@regression BUG-004 division order issue',
    async ({ calculator }) => {

      test.fail(
        true,
        'Known defect BUG-004'
      );

      await calculator.performCalculation(
        '8',
        BUTTONS.DIVIDE,
        '2'
      );

      await expect(
        calculator.display
      ).toHaveValue('4');

  });

  test(
    '@regression BUG-005 empty expression failure',
    async ({ calculator }) => {

      test.fail(
        true,
        'Known defect BUG-005'
      );

      await calculator.calculate();

      await expect(
        calculator.display
      ).toHaveValue('Error');

  });

  test(
    '@regression BUG-006 parentheses multiplication inaccuracy',
    async ({ calculator }) => {

      test.fail(
        true,
        'Known defect BUG-006'
      );

      await calculator.enterExpression(
        '(2+4)*5'
      );

      await calculator.calculate();

      await expect(
        calculator.display
      ).toHaveValue('30');

  });

});