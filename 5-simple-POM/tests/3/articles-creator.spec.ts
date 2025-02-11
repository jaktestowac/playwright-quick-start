import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/login.page';
import { ArticlesPage } from '../../src/pages/articles.page';
import { ArticleCreatePage } from '../../src/pages/article-create.page';
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
    await loginPage.emailInput.fill(email);
    await loginPage.passwordInput.fill(password);
    await loginPage.loginButton.click();

    // Assert
    await expect(loginPage.welcomeMessage).toBeVisible();
  });

  test(
    'logged user can create valid article (refactored)',
    {
      tag: '@REQ-002',
    },
    async ({ page }) => {
      // Arrange
      const articlesPage = new ArticlesPage(page);
      const articlePage = new ArticlePage(page);
      const articleTitle = faker.lorem.sentence();
      const articleBody = faker.lorem.paragraph();

      await articlesPage.goto();

      // Act
      await articlesPage.addArticleButton.click();
      await articlesPage.titleInput.fill(title);
      await articlesPage.bodyInput.fill(body);
      await articlesPage.saveButton.click();

      // Assert
      await expect(page.locator('#article-image')).toBeVisible();
      await expect(articlePage.title).toBeVisible();
      await expect(articlePage.body).toBeVisible();
      await expect(articlePage.body).toContainText(articleBody);
      await expect(articlePage.title).toContainText(articleTitle);
    }
  );
});
