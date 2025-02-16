import { test, expect } from '@playwright/test';

test('should log in with valid credentials (recorded)', async ({ page }) => {
  const userEmail = 'Moses.Armstrong@Feest.ca';
  const password = 'test1';

  // Arrange
  await page.goto('/login');

  // Act
  await page
    .getByRole('textbox', { name: 'Enter User Email' })
    .fill(userEmail);
  await page.getByRole('textbox', { name: 'Enter Password' }).fill(password);
  await page.getByRole('button', { name: 'LogIn' }).click();

  // Assert
  await expect(page.getByTestId('hello')).toBeVisible();
});
