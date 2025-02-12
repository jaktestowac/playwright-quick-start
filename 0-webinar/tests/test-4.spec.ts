import { test, expect } from '@playwright/test';

test.describe('Articles - Creator Role', () => {
  test.beforeEach(async ({ page }) => {
    // Arrange
    await page.goto('login/');
    const userEmail = 'Moses.Armstrong@Feest.ca';
    const userPassword = 'test1';

    // Act
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
      // Arrange
      const commentBody = 'Testy na prodzie';
      await page.goto('articles.html');
      await page.getByTestId('article-57-link').click();

      // Act
      await page.locator('#add-new').click();
      await page.locator('#body').click();
      await page.locator('#body').fill(commentBody);
      await page.getByRole('button', { name: 'Save' }).click();
      await page.getByTestId('alert-popup').click();

      // Assert
      await expect(page.locator('#containerComments')).toContainText(
        'Testy na prodzie',
      );
    },
  );
});
