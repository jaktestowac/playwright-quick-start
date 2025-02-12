import { test, expect } from '@playwright/test';

test(
  'User can view articles (recorded)',
  {
    tag: '@REQ-001',
  },
  async ({ page }) => {
    // Arrange
    await page.goto('articles.html');

    // Act
    await expect(page.getByTestId('article-57')).toBeVisible();
    await page.getByTestId('article-57-link').click();

    // Assert
    await expect(page.getByTestId('article-title')).toBeVisible();
    await expect(page.getByTestId('article-body')).toBeVisible();
  },
);
