import { Locator, Page } from '@playwright/test';

export class ArticlePage {
    articleTitle: Locator;
    articleBody: Locator;

    constructor(private page: Page) {
        this.articleTitle = page.getByTestId('article-title');
        this.articleBody = page.getByTestId('article-body');
    }
}
