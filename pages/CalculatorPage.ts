import { Page, Locator } from '@playwright/test';
import path from 'path';

export class CalculatorPage {

  readonly page: Page;

  readonly display: Locator;

  constructor(page: Page) {
    this.page = page;

    this.display = page.locator('#display');
  }

  async open() {
    const filePath = path.resolve(
      'app/Scientific Calculator.html'
    );

    await this.page.goto(`file://${filePath}`);
  }

  digit(value: string) {
    return this.page.getByRole('button', { name: value });
  }

  operator(value: string) {
    return this.page.getByRole('button', { name: value });
  }

  get clearBtn() {
    return this.page.getByRole('button', { name: 'C' });
  }

  get equalBtn() {
    return this.page.getByRole('button', { name: '=' });
  }

  get sinBtn() {
    return this.page.getByRole('button', { name: 'sin' });
  }

  get cosBtn() {
    return this.page.getByRole('button', { name: 'cos' });
  }

  get tanBtn() {
    return this.page.getByRole('button', { name: 'tan' });
  }

  get sqrtBtn() {
    return this.page.getByRole('button', { name: '√' });
  }

  get logBtn() {
    return this.page.getByRole('button', { name: 'log' });
  }

  async clickSequence(sequence: string[]) {
    for (const item of sequence) {
      await this.page
        .getByRole('button', { name: item })
        .click();
    }
  }

  async value() {
    return this.display.inputValue();
  }
}