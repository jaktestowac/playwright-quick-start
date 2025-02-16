import { test, expect } from '@playwright/test';

test('User can view articles (recorded)', async ({ page }) => {
  await page.goto('/articles.html');
  await page.getByTestId('article-57-link').click();
  await expect(page.getByTestId('article-title')).toBeVisible();
  await expect(page.getByTestId('article-body')).toBeVisible();
});