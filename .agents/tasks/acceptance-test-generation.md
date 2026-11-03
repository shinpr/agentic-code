# Acceptance Test Generation

## Purpose

Select and create the integration or E2E tests that own acceptance-criterion behavior at the boundary where it is observable.

## Required Skills

- `.agents/skills/testing/SKILL.md`
- `.agents/skills/testing-strategy/SKILL.md`
- `.agents/skills/integration-e2e-testing/SKILL.md`
- `.agents/skills/metacognition/SKILL.md`

## Required Inputs

- acceptance criteria;
- relevant repository test patterns and existing coverage;
- named integration or user-journey boundaries;
- available deterministic test environments.

## Completion Conditions

- Every candidate acceptance criterion has a selected proof result: existing, unit, integration, E2E, or none.
- Every new integration or E2E test traces to an observable requirement or preserved contract.
- Each claim has one owning test, and an existing owner is updated rather than duplicated.
- Generated skeletons follow repository conventions and contain the metadata required by their planning consumer.
- Skipped candidates require no durable record unless a downstream consumer needs the reason.

## Process

### 1. Extract Observable Criteria

For each acceptance criterion, identify:

- the actor or consumer;
- the action or event;
- the observable result;
- the system boundary that must be crossed, if any;
- environmental constraints that affect deterministic proof.

Return ambiguous product behavior to the owning requirements or design phase. Resolve repository-local test details from existing patterns.

### 2. Select the Owning Test

Apply the `testing-strategy` Selection Process to each criterion. Select `none` when the criterion does not require executable test proof or when another accepted verification method is sufficient.

### 3. Generate Necessary Skeletons

Generate a skeleton only when the repository pattern or Work Plan needs a concrete executable boundary before implementation. Write it into the existing test file that owns the boundary when one exists.

Each skeleton includes:

```text
Acceptance criterion: [identifier or behavior]
Boundary: [observable interaction or journey]
Why this boundary: [where the behavior becomes observable]
Setup: [required state]
Action: [operation]
Expected: [observable result]
Implementation status: pending
```

Use repository-native pending or placeholder markers. Avoid implementing the behavior during skeleton generation.

### 4. Report Selection

Return only information needed by planning:

```text
Selected proof:
- [AC]: existing | unit | integration | E2E | none
  Evidence: [path or boundary]
  Reason: [selection criterion]

Generated files:
- [path, or none]
```

## Quality Check

- Candidate enumeration did not become a test backlog.
- Every generated test has a named observable effect.
- No two tests own the same claim; a wider test adds only what its boundary adds.
- The result can legitimately contain no new test files.
