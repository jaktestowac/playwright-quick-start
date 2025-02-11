import { Page, Locator } from '@playwright/test';

export class ArticlesPage {
  readonly addArticleButton: Locator;
  readonly titleInput: Locator;
  readonly bodyInput: Locator;
  readonly saveButton: Locator;

  constructor(private page: Page) {
    this.addArticleButton = page.getByRole('button', { name: 'Add Article' });
    this.titleInput = page.getByTestId('title-input');
    this.bodyInput = page.getByTestId('body-text');
    this.saveButton = page.getByTestId('save');
  }

  async goto() {
    await this.page.goto('/articles.html');
  }
}
