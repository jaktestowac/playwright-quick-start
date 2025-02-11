# Stage 6

Aggregation of actions into methods in Page Objects.
E.g. `login()`, `createArticle()`, `createComment()`.

## What was changed?

- [Add] `async login(email: string, password: string)` in `login.page.ts`
- [Add] `async createArticle(title: string, content: string)` in `articles.page.ts`
- [Add] `async createComment(content: string)` in `article.page.ts`
