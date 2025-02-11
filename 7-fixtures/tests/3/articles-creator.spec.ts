import { test, expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/login.page';
import { ArticlesPage } from '../../src/pages/articles.page';
import { ArticleCreatePage } from '../../src/pages/article-create.page';
import { ArticlePage } from '../../src/pages/article.page';
import { faker } from '@faker-js/faker';

test.describe('Articles - Creator Role', () => {
  test(
    'logged user can create valid article (refactored)',
    {
      tag: '@REQ-002',
    },
    async ({ page, loginUser }) => {
      // Arrange
      const articlesPage = new ArticlesPage(page);
      const articlePage = new ArticlePage(page);
      const articleTitle = faker.lorem.sentence();
      const articleBody = faker.lorem.paragraph();

      await articlesPage.goto();

      // Act
      await articlesPage.addArticle(articleTitle, articleBody);

      // Assert
      await expect(page.locator('#article-image')).toBeVisible();
      await expect(articlePage.title).toBeVisible();
      await expect(articlePage.body).toBeVisible();
      await expect(articlePage.body).toContainText(articleBody);
      await expect(articlePage.title).toContainText(articleTitle);
    }
  );
});
