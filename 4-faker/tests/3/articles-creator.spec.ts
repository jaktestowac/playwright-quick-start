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
    'logged user can create valid article (refactored)',
    {
      tag: '@REQ-002',
    },
    async ({ page }) => {
      // Arrange
      const articleTitle = faker.lorem.sentence();
      const articleBody = faker.lorem.paragraph();

      await page.goto('articles.html');

      // Act
      await page.getByRole('button', { name: 'Add Article' }).click();
      await page.getByTestId('title-input').fill(articleTitle);
      await page.getByTestId('body-text').fill(articleBody);
      await page.getByTestId('save').click();

      // Assert
      await expect(page.locator('#article-image')).toBeVisible();
      await expect(page.getByTestId('article-title')).toBeVisible();
      await expect(page.getByTestId('article-body')).toBeVisible();
      await expect(page.getByTestId('article-body')).toContainText(articleBody);
      await expect(page.getByTestId('article-title')).toContainText(
        articleTitle
      );
    }
  );
});
