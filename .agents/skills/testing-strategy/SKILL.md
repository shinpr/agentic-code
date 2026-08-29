---
name: testing-strategy
description: "Selects the narrowest sufficient test boundary from requirements, repository evidence, and maintenance cost. Use when deciding integration or E2E coverage."
---

# Test Strategy

## Purpose

Select tests that prove an observable requirement at the lowest sufficient cost. Candidate discovery does not create an obligation to implement every technically valid test.

## Selection Process

For each acceptance criterion that may require integration or E2E proof:

1. **Name the observable boundary**: Identify the interaction, persisted effect, process, or user journey that must be proven.
2. **Check existing proof**: Reuse or extend an established test when it already observes the required behavior.
3. **Select the narrowest level**:
   - use a unit or local check for isolated behavior;
   - use integration when the requirement depends on a named component, persistence, or process boundary;
   - use E2E only when the complete journey is itself the requirement.
4. **Compare cost**: Consider setup, execution time, brittleness, maintenance, and diagnostic value using repository evidence rather than fixed universal scores.
5. **Retain necessary proof**: Select a test only when a cheaper boundary cannot establish the required behavior or protect an accepted contract.

No new integration or E2E test is a valid conclusion when existing or cheaper proof is sufficient.

## Priority

Prioritize proof for:

- core user or consumer journeys;
- shared or public contracts;
- persisted state transitions;
- security, authorization, compliance, or irreversible effects;
- integrations with demonstrated failure risk.

Priority does not determine test level. Use the narrowest boundary that can observe the prioritized behavior.

## Deduplication

Before adding a test:

- search the existing suite for equivalent behavior;
- identify overlapping proof at other levels;
- extend existing coverage when that remains clear and maintainable;
- keep one representative proof when several candidates observe the same risk.

## Selection Record

Record only decisions needed by planning or review:

```text
Acceptance criterion: [identifier or behavior]
Selected proof: existing | local | integration | E2E | none
Boundary observed: [observable interaction or result]
Reason: [why this is the narrowest sufficient proof]
```

## Completion Check

- Every selected test traces to an observable requirement or accepted contract.
- A cheaper sufficient boundary was considered.
- Existing proof was reused where sufficient.
