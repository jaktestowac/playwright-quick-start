import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

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
    'logged user can add comment to article (refactored)',
    {
      tag: '@REQ-003',
    },
    async ({ page }) => {
      // Arrange
      const commentBody = faker.lorem.sentence();
      await page.goto('articles.html');

      // Act
      await page.getByTestId('article-57-link').click();
      await page.locator('#add-new').click();
      await page.locator('#body').fill(commentBody);
      await page.getByRole('button', { name: 'Save' }).click();

      // Assert
      await expect(page.getByText(commentBody)).toBeVisible();
    }
  );
});
