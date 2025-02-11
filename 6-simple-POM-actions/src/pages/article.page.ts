import { Page, Locator } from '@playwright/test';

export class ArticlePage {
  readonly title: Locator;
  readonly body: Locator;
  readonly addCommentButton: Locator;
  readonly commentBody: Locator;
  readonly saveCommentButton: Locator;

  constructor(private page: Page) {
    this.title = page.getByTestId('article-title');
    this.body = page.getByTestId('article-body');
    this.addCommentButton = page.locator('#add-new');
    this.commentBody = page.locator('#body');
    this.saveCommentButton = page.getByRole('button', { name: 'Save' });
  }

  async goto(id: number) {
    await this.page.goto(`/article.html?id=${id}`);
  }

  async addComment(comment: string) {
    await this.addCommentButton.click();
    await this.commentBody.fill(comment);
    await this.saveCommentButton.click();
  }
}
