---
name: integration-e2e-testing
description: "Designs integration and E2E tests with mock boundaries. Use when: writing E2E tests, integration tests, or reviewing test quality."
---

# Integration Test & E2E Test Design/Implementation Rules

## Test Types and Limits

| Type | Purpose | Limit |
|------|---------|-------|
| Integration Test | Component interaction verification | 3 per feature |
| E2E Test | Critical user journey verification | 1-2 per feature |

## Behavior-First Principle

### Observability Check (All YES = Include)

| Check | Question | If NO |
|-------|----------|-------|
| Observable | Can user observe the result? | Exclude |
| System Context | Does it require integration of multiple components? | Exclude |
| Automatable | Can it run stably in CI environment? | Exclude |

### Include/Exclude Criteria

**Include**: Business logic accuracy, data integrity, user-visible features, error handling
**Exclude**: External live connections, performance metrics, implementation details, UI layout

## Skeleton Specification

### Required Comment Format

Each test skeleton MUST include:
- **AC**: Original acceptance criteria text
- **ROI**: Calculated score with Business Value and Frequency
- **Behavior**: Trigger → Process → Observable Result format
- **Metadata**: @category, @dependency, @complexity annotations

## Implementation Rules

### Behavior Verification

| Step Type | Verification Target |
|-----------|---------------------|
| Trigger | Reproduce in test setup (Arrange) |
| Process | Intermediate state or function call |
| Observable Result | Final output value (return value, error message, log output) |

**Pass Criteria**: Test passes if "observable result" is verified as return value or mock call argument

### Integration Test Mock Boundaries

| Judgment Criteria | Mock | Actual |
|-------------------|------|--------|
| Part of test target? | No → Can mock | Yes → Actual required |
| External network communication? | Yes → Mock required | No → Actual recommended |

### E2E Test Execution Conditions

- Execute only after all components are implemented
- Do not use mocks (full system integration required)

## Review Criteria

### Skeleton and Implementation Consistency

| Check | Failure Condition |
|-------|-------------------|
| Behavior Verification | No assertion for "observable result" |
| Verification Item Coverage | Listed verification items not included in assertions |
| Mock Boundary | Internal components mocked in integration test |

### Implementation Quality

| Check | Failure Condition |
|-------|-------------------|
| AAA Structure | Arrange/Act/Assert separation unclear |
| Independence | State sharing between tests, execution order dependency |
| Reproducibility | Depends on date/random, results vary |
| Readability | Test name and verification content don't match |
