import { faker } from '@faker-js/faker';
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
    'logged user can create valid article (recorded)',
    {
      tag: '@REQ-002',
    },
    async ({ page }) => {
      // Arrange
      const articleTitle = faker.lorem.sentence();
      const articleBody = faker.lorem.paragraph();

      await page.goto('articles.html');
      await page.getByRole('button', { name: 'Add Article' }).click();

      // Act
      await page.getByTestId('title-input').click();
      await page.getByTestId('title-input').fill(articleTitle);
      await page.getByTestId('body-text').click();
      await page.getByTestId('body-text').fill(articleBody);
      await page.getByTestId('save').click();
      await page.getByTestId('alert-popup').click();

      // Assert
      await expect(page.getByTestId('alert-popup')).toContainText(
        'Article was created',
      );
      await expect(page.locator('#article-image')).toBeVisible();
      await expect(page.getByTestId('article-body')).toBeVisible();
      await expect(page.getByTestId('article-body')).toContainText(articleBody);
      await expect(page.getByTestId('article-title')).toBeVisible();
      await expect(page.getByTestId('article-title')).toContainText(
        articleTitle,
      );
    },
  );
});
