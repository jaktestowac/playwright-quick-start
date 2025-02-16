import { test, expect } from '@playwright/test';

test('should log in with valid credentials (recorded)', async ({ page }) => {
  // Arrange
  await page.goto('/login');

  // Act
  await page
    .getByRole('textbox', { name: 'Enter User Email' })
    .fill('Moses.Armstrong@Feest.ca');
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('test1');
  await page.getByRole('button', { name: 'LogIn' }).click();

  // Assert
  await expect(page.getByTestId('hello')).toBeVisible();
});
