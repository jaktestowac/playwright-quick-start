import { test, expect } from '@playwright/test';

test('User can log in and view articles', async ({ page }) => {
  // Arrange
  await page.goto('/login');
  await page.getByRole('textbox', { name: 'Enter User Email' }).fill('Moses.Armstrong@Feest.ca');
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('test1');
  await page.getByRole('button', { name: 'LogIn' }).click();
  await expect(page.getByTestId('hello')).toBeVisible();

  // Act
  await page.goto('/articles.html');
  await page.getByTestId('article-57-link').click();

  // Assert
  await expect(page.getByTestId('article-title')).toBeVisible();
  await expect(page.getByTestId('article-body')).toBeVisible();
});
