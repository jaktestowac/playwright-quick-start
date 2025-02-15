import { Page } from '@playwright/test';

export class LoginPage {
    url = '/login';
    constructor(protected page: Page) {}

    async goto(): Promise<void> {
        await this.page.goto(this.url);
    }

    async login(email: string, password: string): Promise<void> {
        await this.page.getByRole('textbox', { name: 'Enter User Email' }).fill(email);
        
          await this.page
            .getByRole('textbox', { name: 'Enter Password' })
            .fill(password);
          await this.page.getByRole('button', { name: 'LogIn' }).click();
    }
}
