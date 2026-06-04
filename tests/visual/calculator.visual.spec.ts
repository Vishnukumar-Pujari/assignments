import { test, expect } from '../../fixtures/testFixture';

test.describe('Visual Tests', () => {

  test('@visual calculator homepage',
    async ({ page }) => {

      await expect(page)
        .toHaveScreenshot(
          'calculator-homepage.png'
        );

  });

});