import { test as base } from '@playwright/test';
import { CalculatorPage } from '../pages/CalculatorPage';

type Fixtures = {
  calculator: CalculatorPage;
};

export const test = base.extend<Fixtures>({
  calculator: async ({ page }, use) => {
    const calculator = new CalculatorPage(page);

    await calculator.open();

    await use(calculator);
  }
});

export const expect = test.expect;