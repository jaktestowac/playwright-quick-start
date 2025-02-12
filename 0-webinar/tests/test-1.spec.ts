import { test, expect } from '@playwright/test';

test(
  'User can view articles (recorded)',
  {
    tag: '@REQ-001',
  },
  async ({ page }) => {
    await page.goto('http://localhost:3000/articles.html');
    await expect(page.getByTestId('article-57')).toBeVisible();
    await page.getByTestId('article-57-link').click();
    await expect(page.getByTestId('article-title')).toBeVisible();
    await expect(page.getByTestId('article-body')).toBeVisible();
  },
);
