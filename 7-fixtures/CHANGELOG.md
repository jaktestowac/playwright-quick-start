# Stage 7

Moved login into fixture.

## What was changed?

- [Add] `fixture.ts` in `src`
- [Add] `loginUser` in `fixture.ts`
- [Update] `articles-creator.spec.ts` to use `loginUser` (import and call)
- [Update] `comments-creator.spec.ts` to use `loginUser` (import and call)
