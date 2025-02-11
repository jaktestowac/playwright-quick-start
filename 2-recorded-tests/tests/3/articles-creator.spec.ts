import { test, expect } from '@playwright/test';

test.describe('Articles - Creator Role', () => {
  test.beforeEach(async ({ page }) => {
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

  test(
    'logged user can create valid article (recorded)',
    {
      tag: '@REQ-002',
    },
    async ({ page }) => {
      await page.goto('articles.html');
      await page.getByRole('button', { name: 'Add Article' }).click();
      await page.getByTestId('title-input').fill('my test article');
      await page.getByTestId('body-text').fill('test body');
      await page.getByTestId('save').click();
      await page.getByTestId('alert-popup').click();
      await expect(page.locator('#article-image')).toBeVisible();
      await expect(page.getByTestId('article-title')).toBeVisible();
      await expect(page.getByTestId('article-body')).toBeVisible();
      await expect(page.getByTestId('article-body')).toContainText('test body');
      await expect(page.getByTestId('article-title')).toContainText(
        'my test article'
      );
    }
  );
});
