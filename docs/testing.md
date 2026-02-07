# Testing and TDD Guide

This project uses Vitest for unit and integration tests, and Playwright for E2E tests.

**Quick Commands**
1. `pnpm test` runs unit and integration tests.
2. `pnpm test:watch` runs tests in watch mode.
3. `pnpm test:coverage` generates coverage.
4. `pnpm test:e2e` runs Playwright E2E tests.
5. `pnpm test:e2e:ui` opens Playwright UI mode.

**Test Types and Locations**
1. Unit and integration tests live in `src/**/*.test.ts` and `src/**/*.test.tsx`.
2. E2E tests live in `tests/e2e`.

**TDD Workflow**
1. Write a failing test that captures the smallest behavior change.
2. Implement the minimum code to pass.
3. Refactor with tests still green.
4. Commit small, coherent changes.

**Mocking and API Tests**
1. MSW handlers live in `src/test/handlers.ts`.
2. Add route handlers as the API surface grows.
3. Prefer integration tests that hit hooks and components with MSW rather than mocking axios directly.

**Third-Party Components**
1. Do not unit-test internals of Radix, lucide, framer-motion, or Next.js components.
2. Test your integration points: props wiring, accessibility, and visible behavior.

**Playwright Notes**
1. Default `baseURL` is `http://127.0.0.1:3000`.
2. If you run the app yourself, set `PLAYWRIGHT_TEST_BASE_URL` to skip the dev server.

**Coverage Targets**
1. Utilities and pure functions should be near 100%.
2. UI components should cover interaction and accessibility states.
3. Business flows should be covered by E2E tests.

## Senior-Level Frontend System Design Additions

These are high-leverage upgrades that scale quality, performance, and team velocity.

**Architecture and Boundaries**
1. Define a feature folder standard. Example: `src/features/auth/{api,components,hooks,types}`.
2. Enforce server and client boundaries with explicit `server` and `client` exports.
3. Introduce a typed `api` layer that defines request and response contracts once.

**Data and State**
1. Add query key factories and co-located query definitions.
2. Use a data normalization strategy for list-heavy flows.
3. Adopt a consistent cache invalidation policy for mutations.

**Type Safety**
1. Generate API types from OpenAPI or use `zod`-first schemas shared between server and client.
2. Introduce a `Result` type for API failures and avoid exceptions in UI layers.
3. Add lint rules to ban `any` outside of edge cases.

**Performance**
1. Add route-level and component-level code-splitting with dynamic imports where appropriate.
2. Add image and font performance budgets with Lighthouse CI.
3. Add runtime performance profiling in CI for critical routes.

**Testing Strategy**
1. Test at the boundary: hooks with MSW, UI with Testing Library, flows with Playwright.
2. Add smoke tests for each top-level route.
3. Add visual regression tests for critical screens.

**Observability**
1. Add a structured logging layer for client and server.
2. Introduce error boundaries per feature with a unified error UI.
3. Add performance and error monitoring integration.

**Security and Compliance**
1. Centralize auth and token handling with a single source of truth.
2. Add CSRF strategy for state-changing requests.
3. Add security headers and content security policy.

**Quality Gates**
1. Add pre-commit hooks for lint and unit tests.
2. Add CI pipeline with separate stages for lint, unit, integration, and E2E.
3. Enforce minimum coverage thresholds and critical path E2E checks.
