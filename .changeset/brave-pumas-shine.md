---
'@hyperse/graphql-codegen-enum': patch
---

chore: upgrade CI workflows and toolchain. Replace the single-file test workflow with a path-filtered `CI-unitest` pipeline running lint, build and tests on `yarn --frozen-lockfile`, align the release workflow with `lts/*` Node and add `YARN_NPM_AUTH_TOKEN` so Yarn Berry can publish, and bump the toolchain to Yarn 4.18, TypeScript 7 (pinned to 6.x via `resolutions` for `typescript-eslint`), ESLint 10, Vitest 5 and Changesets 3. No runtime or API changes.
