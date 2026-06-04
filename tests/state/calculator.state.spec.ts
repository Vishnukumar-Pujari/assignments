import { test, expect } from '../../fixtures/testFixture';

test.describe('State Management', () => {

  test('@state clear after error', async ({ calculator }) => {

    await calculator.operator('(').click();

    await calculator.equalBtn.click();

    await calculator.clearBtn.click();

    await expect(
      calculator.display
    ).toHaveValue('');
  });

  test('@state multiple sequential calculations',
    async ({ calculator }) => {

      await calculator.clickSequence([
        '1',
        '+',
        '1',
        '='
      ]);

      await expect(
        calculator.display
      ).toHaveValue('2');

      await calculator.clickSequence([
        '+',
        '2',
        '='
      ]);

      const result =
        await calculator.display.inputValue();

      expect(result.length).toBeGreaterThan(0);

  });

});