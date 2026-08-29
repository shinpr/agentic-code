---
name: integration-e2e-testing
description: "Applies integration and E2E implementation, mock-boundary, and review rules. Use when: writing integration or E2E tests or reviewing their quality."
---

# Integration and E2E Test Implementation and Review Rules

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
