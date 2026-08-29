# Acceptance Test Generation

## Purpose

Select and create only the integration or E2E proof that an acceptance criterion cannot obtain more cheaply.

## Required Skills

- `.agents/skills/testing/SKILL.md`
- `.agents/skills/testing-strategy/SKILL.md`
- `.agents/skills/integration-e2e-testing/SKILL.md`
- `.agents/skills/metacognition/SKILL.md`

## Required Inputs

- approved acceptance criteria;
- relevant repository test patterns and existing coverage;
- named integration or user-journey boundaries;
- available deterministic test environments.

## Completion Conditions

- Every candidate acceptance criterion has a selected proof result: existing, local, integration, E2E, or none.
- Every new integration or E2E test traces to an observable requirement or preserved contract.
- Existing and cheaper proof was considered first.
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

### 2. Check Existing and Cheaper Proof

Use this order:

1. Existing test or executable check already proves the behavior.
2. A focused local or unit test can prove it.
3. An integration test is required for a named interaction, persistence, or process boundary.
4. An E2E test is required because the complete journey is the acceptance criterion.

Select `none` when the criterion does not require executable test proof or when another accepted verification method is sufficient.

### 3. Evaluate Test Cost

Compare setup, runtime, brittleness, maintenance, determinism, and diagnostic value using repository evidence. Select proof whose observable value justifies its cost at the narrowest sufficient level.

Prioritize security, authorization, persisted state, public contracts, irreversible effects, and core journeys, while still using the narrowest sufficient test level.

### 4. Generate Necessary Skeletons

Generate a skeleton only when the repository pattern or Work Plan needs a concrete executable boundary before implementation.

Each skeleton includes:

```text
Acceptance criterion: [identifier or behavior]
Boundary: [observable interaction or journey]
Why this level: [why cheaper proof is insufficient]
Setup: [required state]
Action: [operation]
Expected: [observable result]
Implementation status: pending
```

Use repository-native pending or placeholder markers. Avoid implementing the behavior during skeleton generation.

### 5. Report Selection

Return only information needed by planning:

```text
Selected proof:
- [AC]: existing | local | integration | E2E | none
  Evidence: [path or boundary]
  Reason: [selection criterion]

Generated files:
- [path, or none]
```

## Quality Check

- Candidate enumeration did not become a test backlog.
- Every generated test has a named observable effect.
- No integration and E2E duplicate proves the same behavior without a distinct boundary.
- The result can legitimately contain no new test files.
