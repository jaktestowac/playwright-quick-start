# Webinar: Playwright 2025 – How to Get Started? by jaktestowac.pl

This repository contains code used during Webinar organized by jaktestowac.pl:

_"Playwright 2025 – How to Get Started? Boost Your Efficiency – From Manual Testing to Automation and Your First Framework in Just One Hour!"_

(Polish: _"Playwright 2025 – od czego zacząć? Usprawnij swoją pracę – od manuali do automatów i pierwszego frameworka w godzinę!"_)

by [jaktestowac.pl](jaktestowac.pl) team.

More:

[Playwright 2025 – od czego zacząć?](https://jaktestowac.pl/zacznij/)

## Overview

Multirepo with test framework used to demonstrate quick start with Playwright:

- TBD

## Who we are?

We are **Test Architects and Senior Lead Tech Quality Engineers**, who are passionate about testing.
We are constantly looking for new ways to improve our skills and share our knowledge with others.

We are here to help you become a better tester and achieve your testing goals!

Read more about our **[Contribution to Playwright and Community](https://jaktestowac.pl/contribution-playwright/)**

## Prerequisites

Before you start, make sure you have the following installed:

- [Node.js](https://nodejs.org) (v20 or later LTS version)
- [npm](https://www.npmjs.com/)
- our free application to practice automation - [🦎 GAD](https://github.com/jaktestowac/gad-gui-api-demo)

## Project Structure

```
├── 1-start/
│   ├── tests/
│   └── ...
├── 2-recorded-tests/
│   ├── tests/
│   ├── ...
```

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/jaktestowac/bughuntfest-playwright-patterns.git
   cd bughuntfest-playwright-patterns/tests-gad
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Running Tests

Run all tests:

```bash
npm run test
```

Run specific test file:

```bash
npx playwright test tests/articles-viewer.spec.ts
```

Run tests with UI mode:

```bash
npx playwright test --ui
```

Generate test report:

```bash
npx playwright show-report
```

## Troubleshooting

Common issues and solutions:

1. **Tests fail on first run**

   - Ensure 🦎 GAD application is running
   - Check if correct Node.js version is installed

2. **Browser launch fails**
   ```bash
   npx playwright install
   ```

## Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright GitHub Repository](https://github.com/microsoft/playwright)
- Additional resources - [Playwright 2025 – od czego zacząć?](https://jaktestowac.pl/zacznij/)

## Contact

Feel free to reach out to us:

- Website: [jaktestowac.pl](https://jaktestowac.pl)
- LinkedIn: [jaktestowac.pl](https://www.linkedin.com/company/jaktestowac/)

Happy testing and automating tests!🚀

jaktestowac.pl Team
