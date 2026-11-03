---
name: testing
description: "Chooses which tests a change needs, with one owning test per behavioral claim at the boundary where it is observable, and runs applicable quality checks. Use when changing behavior, writing tests, or reviewing test quality."
---

# Testing Rules

Tests guarantee accepted behavior, and the next agent reads every existing test as a requirement to preserve. A brittle, duplicated, or implementation-shaped test therefore becomes a false requirement that later work routes around. Keep the set of tests whose proof is worth its maintenance.

## Language-Specific References

Read a language reference only when the repository uses that language and the reference affects the current test or check:

- **TypeScript/Vitest**: [references/typescript.md](references/typescript.md)

Repository commands and established conventions take precedence over generic examples.

## Test Selection

- Prove accepted behavior by default through integration and E2E tests at the boundary users and callers observe. Add a unit test for logic whose cases one representative boundary test cannot prove, such as calculations, parsing, or branching rules.
- Each behavioral claim is owned by one test: such logic by its unit test, other behavior by the test at the narrowest integration or E2E boundary where it is observable. A test at a wider boundary proves what that boundary adds, such as wiring, mapping, persistence, rendering, or navigation, and keeps at most one representative case of a rule owned elsewhere.
- Update the existing owning test when the change alters its claim. For non-behavioral work or behavior already proven at its boundary, use the smallest applicable verification instead of adding proof. Documentation, pure configuration, disposable spikes, and no-change conclusions need no new test. After an emergency fix, add a test when it protects the reproduced failure from recurrence.
- When a new or changed test passes before the implementation change, check whether the outcome is already satisfied, the test observes the wrong boundary, or work remains elsewhere.

## Test Boundary

Test observable behavior:

- public or shared contracts;
- outputs, errors, and persisted effects;
- required external calls or side effects;
- named interactions across components or processes.

Keep internal implementation details outside tests unless they are themselves an accepted contract.

## Test Design

- Use clear setup, action, and observable expectation.
- Keep test data minimal and free of secrets.
- Prefer deterministic behavior and independent state.
- Mock external I/O at unit boundaries; use real internal collaborators when their interaction is the behavior under test.

## Failure Resolution

- Fix or remove the test when it asserts an invalid requirement, depends on implementation details, no longer observes its stated behavior, or protects a mechanism that an outcome-preserving reduction removed.
- Fix the implementation when the test represents a current requirement or preserved contract.

## Applicable Quality Checks

Discover checks from repository scripts, CI configuration, language tooling, and contributor documentation. Run checks affected by the change, plus broader required checks before final completion.

When a repository lacks a relevant check, report the verification gap. Add new tooling only when the outcome or a demonstrated recurring failure justifies its cost.

## Completion Check

- Each changed behavioral claim has one owning test that observes it at its boundary.
- Applicable established checks pass.
- Unavailable verification and residual risk are reported.
