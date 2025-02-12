import { test, expect } from '@playwright/test';

test.describe('Articles - Creator Role', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login/');
    await page
      .getByRole('textbox', { name: 'Enter User Email' })
      .fill('Moses.Armstrong@Feest.ca');
    await page.getByRole('textbox', { name: 'Enter Password' }).fill('test1');
    await page.getByRole('button', { name: 'LogIn' }).click();
    await expect(page.getByTestId('hello')).toBeVisible();
  });

  test(
    'logged user can create valid article (recorded)',
    {
      tag: '@REQ-002',
    },
    async ({ page }) => {
      await page.goto('articles.html');
      await page.getByRole('button', { name: 'Add Article' }).click();
      await page.getByTestId('title-input').click();
      await page.getByTestId('title-input').fill('Article test');
      await page.getByTestId('body-text').click();
      await page.getByTestId('body-text').fill('Abracadabra');
      await page.getByTestId('save').click();
      await page.getByTestId('alert-popup').click();
      await expect(page.locator('alert-popup')).toContainText(
        'Article was created',
      );
      await expect(page.locator('#article-image')).toBeVisible();
      await expect(page.getByTestId('article-body')).toBeVisible();
      await expect(page.getByTestId('article-body')).toContainText(
        'Abracadabra',
      );
      await expect(page.getByTestId('article-title')).toBeVisible();
      await expect(page.getByTestId('article-title')).toContainText(
        'Article test',
      );
    },
  );
});
