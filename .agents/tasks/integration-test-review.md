# Integration and E2E Test Review

## Purpose

Verify that selected integration or E2E tests observe their claimed boundary, follow repository conventions, and justify their cost.

## Required Skills

- `.agents/skills/testing/SKILL.md`
- `.agents/skills/integration-e2e-testing/SKILL.md`
- `.agents/skills/testing-strategy/SKILL.md`
- `.agents/skills/metacognition/SKILL.md`

## Required Inputs

- test paths or diff;
- mapped acceptance criteria or preserved contracts;
- reason the selected test level is required;
- relevant repository test conventions.

## Review Process

1. Confirm the observable behavior and boundary claimed by each test.
2. Verify that setup, action, and assertions exercise that boundary rather than mocks or implementation details.
3. Check whether existing or cheaper proof already supplies the same evidence.
4. Evaluate determinism, state isolation, cleanup, and repository-specific mock boundaries.
5. Record findings only when they affect correctness, diagnostic value, maintenance cost, scope, or acceptance proof.

## Result

- `approved`: Tests provide necessary, trustworthy proof at an appropriate boundary.
- `needs_revision`: A current test can pass without proving its claim, duplicates cheaper proof without a distinct effect, or violates an established repository boundary.
- `blocked`: The mapped requirement or test environment needed for judgment is unavailable.

## Output

```text
[TEST REVIEW]
Boundary: [acceptance criterion or contract]
Verdict: approved | needs_revision | blocked

Findings:
- Severity: high | medium | low
  Location: [path:line]
  Evidence: [observed behavior]
  Effect: [proof, correctness, or cost impact]
  Disposition candidate: apply | decline | user decision

Limitations:
- [unknown or none]
```

Repeat review only when an applied correction changes relevant evidence. The absence of new integration or E2E tests is valid when cheaper proof is sufficient.
