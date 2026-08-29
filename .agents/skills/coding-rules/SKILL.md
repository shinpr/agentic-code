---
name: coding-rules
description: "Applies repository-aware rules for maintainable implementation, contracts, errors, and refactoring. Use when writing or modifying code."
---

# Development Rules

## Language and Repository Rules

Use the repository's formatter, linter, type system, naming conventions, and representative code patterns. Read a language reference only when it applies:

- **TypeScript**: [references/typescript.md](references/typescript.md)

Repository contracts and accepted design decisions take precedence over generic style preferences.

## Minimal Change

- Implement the confirmed outcome through existing mechanisms where sufficient.
- Keep unrelated cleanup and optional hardening outside the change.
- Remove unused code encountered inside the changed responsibility when evidence shows no current consumer remains.
- Introduce an abstraction only when current callers share responsibility and change pressure.

## Functions and Interfaces

- Keep one coherent responsibility per function or module.
- Use the language's idiomatic parameter and data-shape conventions.
- Make external dependencies and side effects visible at the appropriate boundary.
- Preserve public and shared contracts unless the approved scope changes them.
- Prefer simple control flow; refactor complexity when it obscures behavior or error handling.

## Error Handling

- Preserve actionable error context across boundaries.
- Convert errors only where the receiving layer needs a different contract.
- Avoid logging the same error at every layer.
- Keep secrets, credentials, and unnecessary personal data out of logs and messages.
- Add fallback behavior only when a current requirement defines the degraded result.

## Comments and Documentation

- Explain non-obvious intent, constraints, or trade-offs.
- Keep comments timeless and remove obsolete or commented-out code.
- Update documentation when an affected consumer would otherwise act on stale information.

## Refactoring

1. Confirm the observable behavior and focused proof.
2. Make the smallest coherent structural change.
3. Run affected verification.
4. Continue only when another current problem remains.

## Performance and Resources

- Measure a demonstrated bottleneck before optimizing.
- Use resource-lifecycle and data-structure patterns appropriate to the language and repository.
- Add caching, concurrency, batching, or monitoring only when a current requirement or measured problem justifies it.

## Completion Check

- The implementation follows representative repository patterns or documents a necessary deviation.
- Added structure has a current consumer and purpose.
- Errors remain observable without duplicative logging or silent fallback.
- Applicable repository checks pass.
