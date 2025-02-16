import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';
import { WelcomePage } from '../src/pages/welcome.page';

test('should log in with valid credentials (recorded)', async ({ page }) => {
  const userEmail = 'Moses.Armstrong@Feest.ca';
  const password = 'test1';

  // Arrange
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  // Act
  await loginPage.emailInput.fill(userEmail);
  await loginPage.passwordInput.fill(password);
  await loginPage.loginButton.click();

  // Assert
  const welcomePage = new WelcomePage(page);
  await expect(welcomePage.helloMessage).toBeVisible();
});
