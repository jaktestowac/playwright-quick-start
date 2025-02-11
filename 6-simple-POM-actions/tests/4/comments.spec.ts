import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/login.page';
import { ArticlesPage } from '../../src/pages/articles.page';
import { ArticlePage } from '../../src/pages/article.page';
import { faker } from '@faker-js/faker';

test.describe('Articles - Creator Role', () => {
  test.beforeEach(async ({ page }) => {
    // Arrange
    const loginPage = new LoginPage(page);
    const userEmail = 'Moses.Armstrong@Feest.ca';
    const userPassword = 'test1';

    // Act
    await loginPage.goto();
    await loginPage.login(userEmail, userPassword);

    // Assert
    await expect(loginPage.welcomeMessage).toBeVisible();
  });

  test(
    'logged user can add comment to article (refactored)',
    {
      tag: '@REQ-003',
    },
    async ({ page }) => {
      // Arrange
      const articlesPage = new ArticlesPage(page);
      const articlePage = new ArticlePage(page);
      const commentBody = faker.lorem.sentence();

      await articlePage.goto(57);

      // Act
      await articlePage.addComment(commentBody);

      // Assert
      await expect(page.getByText(commentBody)).toBeTruthy();
    }
  );
});
