import { test as base } from '@playwright/test';
import { LoginPage } from './pages/login.page';

type MyFixtures = {
  loginUser: LoginPage;
};

export const test = base.extend<MyFixtures>({
  loginUser: async ({ page }, use) => {
    // Arrange
    const loginPage = new LoginPage(page);
    const userEmail = 'Moses.Armstrong@Feest.ca';
    const userPassword = 'test1';

    // Act
    await loginPage.goto();
    await loginPage.login(userEmail, userPassword);

    await use(loginPage);
  },
});
