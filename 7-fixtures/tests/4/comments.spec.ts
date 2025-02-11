import { expect } from '@playwright/test';
import { test } from '../../src/fixtures'; // was changed to custom import
import { LoginPage } from '../../src/pages/login.page';
import { ArticlesPage } from '../../src/pages/articles.page';
import { ArticlePage } from '../../src/pages/article.page';
import { faker } from '@faker-js/faker';

test.describe('Articles - Creator Role', () => {
  test(
    'logged user can add comment to article (refactored)',
    {
      tag: '@REQ-003',
    },
    async ({ page, loginUser }) => {
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
