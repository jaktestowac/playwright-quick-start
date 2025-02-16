import { test, expect } from '@playwright/test';

test.describe('Articles and logged user', () => {

  test.beforeEach(async ({ page }) => {
    const userEmail = 'Moses.Armstrong@Feest.ca';
    const password = 'test1';

    await page.goto('/login');
    await page
      .getByRole('textbox', { name: 'Enter User Email' })
      .fill(userEmail);
    await page.getByRole('textbox', { name: 'Enter Password' }).fill(password);
    await page.getByRole('button', { name: 'LogIn' }).click();
    await expect(page.getByTestId('hello')).toBeVisible();
  });

  test('User can log in and view articles', async ({ page }) => {
    // Arrange
    await page.goto('/articles.html');

    // Act
    await page.getByTestId('article-57-link').click();

    // Assert
    await expect(page.getByTestId('article-title')).toBeVisible();
    await expect(page.getByTestId('article-body')).toBeVisible();
  });

  test('User can log in and create articles', async ({ page }) => {
    // Arrange
    const titleText = 'title test';
    const bodyText = 'body test';
    await page.goto('/articles.html');

    // Act
    await page.getByRole('button', { name: 'Add Article' }).click();
    await page.getByTestId('title-input').fill(titleText);
    await page.getByTestId('body-text').fill(bodyText);
    await page.getByTestId('save').click();

    // Assert
    await page.getByTestId('alert-popup').click();
    await expect(page.getByTestId('article-title')).toContainText(titleText);
    await expect(page.getByTestId('article-body')).toContainText(bodyText);
  });

});
