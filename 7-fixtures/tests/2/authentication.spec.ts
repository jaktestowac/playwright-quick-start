import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/login.page';

test.describe('Authentication (refactored)', () => {
  test('should log in with valid credentials', async ({ page }) => {
    // Arrange
    const loginPage = new LoginPage(page);
    const userEmail = 'Moses.Armstrong@Feest.ca';
    const userPassword = 'test1';

    // Act
    await loginPage.goto();
    await loginPage.login(userEmail, userPassword);
    // Assert
    await expect(loginPage.welcomeMessage).toBeVisible();
  });
});
