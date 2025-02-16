import { faker } from '@faker-js/faker';
import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/pages/login.page';
import { ArticlesPage } from '../src/pages/articles.page';

test.describe('Articles and logged user', () => {
  test.beforeEach(async ({ page }) => {
    const userEmail = 'Moses.Armstrong@Feest.ca';
    const password = 'test1';

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(userEmail, password);
    await expect(page.getByTestId('hello')).toBeVisible();
  });

  test('User can log in and view articles', async ({ page }) => {
    // Arrange
    const articlesPage = new ArticlesPage(page);
    await articlesPage.goto();

    // Act
    await articlesPage.viewArticle();

    // Assert
    await expect(articlesPage.articleTitle).toBeVisible();
    await expect(articlesPage.articleBody).toBeVisible();
  });

  test('User can log in and create articles', async ({ page }) => {
    // Arrange
    const titleText = faker.lorem.words();
    const bodyText = faker.lorem.paragraph();
    const articlesPage = new ArticlesPage(page);
    await articlesPage.goto();

    // Act
    const articlePage = await articlesPage.addArticle(titleText, bodyText);

    // Assert
    await expect(articlePage.articleTitle).toContainText(titleText);
    await expect(articlePage.articleBody).toContainText(bodyText);
  });
});
