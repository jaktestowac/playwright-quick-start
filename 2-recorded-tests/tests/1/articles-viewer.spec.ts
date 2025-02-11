import { test, expect } from '@playwright/test';

test.describe('Articles - Viewer Role', () => {
  test(
    'User can view articles (recorded)',
    {
      tag: '@REQ-001',
    },
    async ({ page }) => {
      await page.goto('/articles.html');
      await expect(page.getByTestId('article-57')).toBeVisible();
      await page.getByTestId('article-57-link').click();
      await expect(page.getByTestId('article-title')).toBeVisible();
      await expect(page.getByTestId('article-body')).toBeVisible();
    }
  );
});
