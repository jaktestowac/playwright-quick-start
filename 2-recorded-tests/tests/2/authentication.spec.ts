import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test('should log in with valid credentials (recorded)', async ({ page }) => {
    await page.goto('/login');

    await page.getByRole('textbox', { name: 'Enter User Email' }).click();
    await page
      .getByRole('textbox', { name: 'Enter User Email' })
      .fill('Moses.Armstrong@Feest.ca');
    await page.getByRole('textbox', { name: 'Enter User Email' }).press('Tab');
    await page.getByRole('textbox', { name: 'Enter Password' }).fill('test1');
    await page.getByRole('button', { name: 'LogIn' }).click();
    await expect(page.getByTestId('hello')).toBeVisible();
  });
});
