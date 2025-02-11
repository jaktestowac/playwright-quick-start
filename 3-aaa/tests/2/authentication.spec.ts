import { test, expect } from '@playwright/test';

test.describe('Authentication (refactored)', () => {
  test('should log in with valid credentials', async ({ page }) => {
    // Arrange
    const userEmail = 'Moses.Armstrong@Feest.ca';
    const userPassword = 'test1';

    await page.goto('/login');

    // Act
    await page.getByRole('textbox', { name: 'Enter User Email' }).click();
    await page
      .getByRole('textbox', { name: 'Enter User Email' })
      .fill(userEmail);
    await page
      .getByRole('textbox', { name: 'Enter Password' })
      .fill(userPassword);
    await page.getByRole('button', { name: 'LogIn' }).click();

    // Assert
    await expect(page.getByTestId('hello')).toBeVisible();
  });
});
