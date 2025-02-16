import { test, expect } from '@playwright/test';

test('User can view articles (recorded)', async ({ page }) => {
  // Arrange
  await page.goto('/articles.html');

  // Act
  await page.getByTestId('article-57-link').click();

  // Assert
  await expect(page.getByTestId('article-title')).toBeVisible();
  await expect(page.getByTestId('article-body')).toBeVisible();
});