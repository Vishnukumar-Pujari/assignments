import { Page, Locator } from '@playwright/test';
import path from 'path';

export class CalculatorPage {
  readonly page: Page;
  readonly display: Locator;

  constructor(page: Page) {
    this.page = page;
    this.display = page.locator('#display');
  }

  async open(): Promise<void> {
    const filePath = path.resolve(
      'app/Scientific Calculator.html'
    );

    await this.page.goto(`file://${filePath}`);
  }

  button(name: string): Locator {
    return this.page.getByRole('button', {
      name,
      exact: true
    });
  }

  async clickButton(name: string): Promise<void> {
    await this.button(name).click();
  }

  async clickSequence(
    buttons: string[]
  ): Promise<void> {
    for (const button of buttons) {
      await this.clickButton(button);
    }
  }

async enterExpression(
  expression: string
): Promise<void> {

  for (const char of expression) {

    switch (char) {

      case '*':
        await this.clickButton('×');
        break;

      case '/':
        await this.clickButton('÷');
        break;

      default:
        await this.clickButton(char);
    }
  }
}
  async performCalculation(
    first: string,
    operator: string,
    second: string
  ): Promise<void> {

    await this.enterExpression(
      `${first}${operator}${second}`
    );

    await this.calculate();
  }

  async calculate(): Promise<void> {
    await this.clickButton('=');
  }

  async clear(): Promise<void> {
    await this.clickButton('C');
  }

  async getDisplayValue(): Promise<string> {
    return await this.display.inputValue();
  }
}