import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/loginn.page';

test('should log in with valid credentials (recorded)', async ({ page }) => {
  // Arrange
  const loginPage = new LoginPage(page);
  loginPage.goto();
  
  const userEmail = 'Moses.Armstrong@Feest.ca';
  const userPassword = 'test1';

  // Act
  await loginPage.login(userEmail, userPassword);
  
  // Assert
  await expect(page.getByTestId('hello')).toBeVisible();
});
