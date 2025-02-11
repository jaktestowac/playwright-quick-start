Look at the comments... they are all the same!

We should generate unique data for each test run.

Lets use faker library to generate random data.

https://www.npmjs.com/package/@faker-js/faker

To install faker, run:

```bash
npm i @faker-js/faker
```

To import in ts file:

```typescript
import { faker } from '@faker-js/faker';
```

Now, lets generate random data for `commentBody`:

```typescript
const commentBody = faker.lorem.sentence();
```
