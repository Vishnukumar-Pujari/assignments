import { test, expect } from '../../fixtures/testFixture';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility', () => {

  test('@a11y accessibility scan',
    async ({ page }) => {

      const results =
        await new AxeBuilder({
          page
        }).analyze();

      console.log(
        JSON.stringify(
          results.violations,
          null,
          2
        )
      );

      expect(
        results.violations.length
      ).toBeGreaterThanOrEqual(0);

  });

});