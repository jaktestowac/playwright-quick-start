import { Locator, Page } from '@playwright/test';

export class LoginPage {
    url = '/login';
    emailInput: Locator;
    passwordInput: Locator;
    loginButton: Locator;

    constructor(protected page: Page) {
        this.emailInput = page.getByRole('textbox', { name: 'Enter User Email' });
        this.passwordInput = page.getByRole('textbox', { name: 'Enter Password' });
        this.loginButton = page.getByRole('button', { name: 'LogIn' });
    }

    async goto(): Promise<void> {
        await this.page.goto(this.url);
    }
}
