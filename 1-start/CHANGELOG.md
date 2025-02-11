# Stage 1

Project init with Playwright:

```
npm i playwright@latest
```

## What was changed?

- [Install] `playwright@latest` package
- [Add] `test` script to `package.json`
- [Add] `.gitignore`
- [Remove] unnecessary files and folders (example tests, leave `tests` folder and `example.spec.ts`)
- [Cleanup] `playwright.config.ts`
- [Add] `baseUrl` to `playwright.config.ts`

Run example test with:

```bash
npm run test
```
