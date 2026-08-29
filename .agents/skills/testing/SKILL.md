---
name: testing
description: "Applies repository-aware TDD, observable test design, and applicable quality checks. Use when changing behavior, writing tests, or reviewing test quality."
---

# Testing Rules

## Language-Specific References

Read a language reference only when the repository uses that language and the reference affects the current test or check:

- **TypeScript/Vitest**: [references/typescript.md](references/typescript.md)

Repository commands and established conventions take precedence over generic examples.

## TDD Process

Use RED → GREEN → REFACTOR when a behavior change can be represented by a focused failing test.

### RED

1. Write or select a test that observes the required behavior.
2. Run it and confirm the current implementation does not satisfy the new expectation.
3. If the test already passes, inspect whether the outcome is already satisfied, the test observes the wrong boundary, or implementation work is still required elsewhere.

### GREEN

Implement the smallest change that makes the focused proof pass while preserving current contracts and non-goals.

### REFACTOR

Improve structure only where the current change supplies evidence that refactoring is needed. Keep the focused proof passing.

### VERIFY

Run the focused proof and the repository's applicable established checks. Fix in-scope regressions before completion.

TDD is not required for documentation-only changes, pure configuration without executable behavior, disposable spikes, or a no-change conclusion. Add a test after an emergency fix when the test protects the reproduced failure from recurrence.

## Test Boundary

Test observable behavior:

- public or shared contracts;
- outputs, errors, and persisted effects;
- required external calls or side effects;
- named interactions across components or processes.

Keep internal implementation details outside tests unless they are themselves an accepted contract.

Choose the narrowest sufficient level:

- unit or local check for isolated behavior;
- integration for a named interaction boundary;
- E2E for a complete journey required by the acceptance criterion.

## Test Design

- Use clear setup, action, and observable expectation.
- Keep test data minimal and free of secrets.
- Prefer deterministic behavior and independent state.
- Mock external I/O at unit boundaries; use real internal collaborators when their interaction is the behavior under test.
- Reuse or extend existing representative coverage before adding another lane.

## Failure Resolution

- Fix the test when it asserts an invalid requirement, depends on implementation details, or no longer observes its stated behavior.
- Fix the implementation when the test represents a current requirement or preserved contract.
- Return to the user only when resolution requires a new requirement or a changed approved boundary.

## Applicable Quality Checks

Discover checks from repository scripts, CI configuration, language tooling, and contributor documentation. Run checks affected by the change, plus broader required checks before final completion.

When a repository lacks a relevant check, report the verification gap. Add new tooling only when the approved outcome or a demonstrated recurring failure justifies its cost.

## Completion Check

- Focused proof observes the intended behavior.
- Applicable established checks pass.
- Unavailable verification and residual risk are reported.
