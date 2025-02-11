import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly welcomeMessage: Locator;

  constructor(private page: Page) {
    this.emailInput = page.getByRole('textbox', { name: 'Enter User Email' });
    this.passwordInput = page.getByRole('textbox', { name: 'Enter Password' });
    this.loginButton = page.getByRole('button', { name: 'LogIn' });
    this.welcomeMessage = page.getByTestId('hello');
  }

  async goto() {
    await this.page.goto('/login');
  }
}
