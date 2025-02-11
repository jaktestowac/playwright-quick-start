import { test, expect } from '@playwright/test';

test.describe(
  'Articles - Viewer Role',
  {
    tag: '@REQ-001',
  },
  () => {
    test('User can view articles', async ({ page }) => {
      // Arrange
      await page.goto('/articles.html');

      // Assert - 6 articles are displayed
      await expect(page.locator('.card-wrapper')).toHaveCount(6);

      // Act - Click on the first article
      await page.locator('.card-wrapper').nth(0).click();

      // Assert - Article title and body are visible
      await expect(page.getByTestId('article-title')).toBeVisible();
      await expect(page.getByTestId('article-body')).toBeVisible();
    });
  }
);
