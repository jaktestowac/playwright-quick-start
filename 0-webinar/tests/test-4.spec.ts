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

    await page.goto('articles.html');
    await expect(page.getByTestId('article-57')).toBeVisible();
    await page.getByTestId('article-57-link').click();
  });

  test(
    'logged user can add comment to article (recorded)',
    {
      tag: '@REQ-003',
    },
    async ({ page }) => {
      await page.locator('#add-new').click();
      await page.locator('#body').click();
      await page.locator('#body').fill('Testy na prodzie');
      await page.getByRole('button', { name: 'Save' }).click();
      await page.getByTestId('alert-popup').click();
      await page.locator('alert-popup').click();

      await expect(page.locator('#containerComments')).toContainText(
        'Testy na prodzie',
      );
    },
  );
});
