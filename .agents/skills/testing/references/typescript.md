# TypeScript Testing Rules

Use these rules after identifying the repository's test framework, file naming, setup, and scripts. Do not assume Vitest, Jest, a directory layout, or an integration suffix without repository evidence.

## Observable Tests

- Assert public outputs, errors, persisted effects, and required interactions.
- Keep private fields and implementation-only call order outside tests unless they are accepted contracts.
- Use Arrange-Act-Assert or the repository's equivalent structure when it improves readability.
- Keep test data minimal and deterministic.

## Type-Safe Test Doubles

- Model only the collaborator surface used by the test, such as `Pick<T, K>` or a narrow local interface.
- Use the framework's typed mock utilities when available.
- Use `unknown` and narrowing for intentionally untrusted values.
- Use a type assertion for an external SDK double only when a narrower substitute cannot express the required boundary; document the reason near the assertion.

## Integration and E2E

- Follow repository-native environment setup, cleanup, and fixture patterns.
- Mock outside the boundary being tested and use real collaborators inside it.
- Select an E2E test only when the complete journey is the acceptance criterion.
- Use project-defined performance or timing thresholds; avoid arbitrary multipliers in generic tests.

## Applicable Commands

Discover commands from `package.json`, CI configuration, and contributor documentation. Typical script names may include:

```bash
npm test
npm run build
npm run lint
npm run type-check
```

Run the focused proof and applicable established checks for the changed surface. Report unavailable commands; add tooling only when the approved outcome or a demonstrated recurring failure requires it.
