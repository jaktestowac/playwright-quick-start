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
    'logged user can add comment to article (recorded)',
    {
      tag: '@REQ-003',
    },
    async ({ page }) => {
      await page.goto('articles.html');
      await page.getByTestId('article-57-link').click();
      await page.locator('#add-new').click();
      await page.locator('#body').fill('my test comment ');
      await page.getByRole('button', { name: 'Save' }).click();
      await expect(page.getByText('my test comment')).toBeVisible();
    }
  );
});
