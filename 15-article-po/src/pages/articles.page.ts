import { Locator, Page } from '@playwright/test';
import { ArticlePage } from './article.page';

export class ArticlesPage {
    url = '/articles.html';
    addArticleButton: Locator;
    titleInput: Locator;
    bodyText: Locator;
    saveButton: Locator;
    alertPopup: Locator;
    articleTitle: Locator;
    articleBody: Locator;
    articleLink: Locator;

    constructor(private page: Page) {
        this.addArticleButton = page.getByRole('button', { name: 'Add Article' });
        this.titleInput = page.getByTestId('title-input');
        this.bodyText = page.getByTestId('body-text');
        this.saveButton = page.getByTestId('save');
        this.alertPopup = page.getByTestId('alert-popup');
        this.articleTitle = page.getByTestId('article-title');
        this.articleBody = page.getByTestId('article-body');
        this.articleLink =  page.locator('.image-link').first();
    }

    async goto(): Promise<void> {
        await this.page.goto(this.url);
    }

    async addArticle(title: string, body: string): Promise<ArticlePage> {
        await this.addArticleButton.click();
        await this.titleInput.fill(title);
        await this.bodyText.fill(body);
        await this.saveButton.click();
        await this.alertPopup.click();
        return new ArticlePage(this.page);
    }

    async viewArticle(): Promise<void> {
        await this.articleLink.click();
    }
}
