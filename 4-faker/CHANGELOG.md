# Stage 4

Added Faker.js to generate random data for tests.

```bash
npm i @faker-js/faker
```

## What was changed?

- [Install] `@faker-js/faker` package
- [Use] `faker` in `articles-creator.spec.ts`
- [Use] `faker` in `comments-creator.spec.ts`

Faker usage:

```ts
import { faker } from '@faker-js/faker';

const articleTitle = faker.lorem.sentence();
const articleBody = faker.lorem.paragraph();
```
