import { test, expect } from '@playwright/test';

test('should log in with valid credentials (recorded)', async ({ page }) => {
  // Arrange
  await page.goto('login/');
  const userEmail = 'Moses.Armstrong@Feest.ca';
  const userPassword = 'test1';

  // Act
  await page.getByRole('textbox', { name: 'Enter User Email' }).fill(userEmail);

  await page
    .getByRole('textbox', { name: 'Enter Password' })
    .fill(userPassword);
  await page.getByRole('button', { name: 'LogIn' }).click();

  // Assert
  await expect(page.getByTestId('hello')).toBeVisible();
});
