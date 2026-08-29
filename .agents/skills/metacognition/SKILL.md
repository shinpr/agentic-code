---
name: metacognition
description: "Checks task understanding, evidence, scope, and stopping conditions at decision-changing moments. Use when starting repository work, changing task type, encountering unexpected evidence, or completing a meaningful phase."
---

# Metacognition Protocol

## Purpose

Prevent the agent from following an invalid route, expanding work without evidence, or declaring completion without observable proof.

## Checkpoints

Run a checkpoint when:

- repository work begins;
- the task type or approved outcome changes;
- unexpected evidence invalidates the current approach;
- a major phase or coherent implementation task completes;
- the next action requires user authority or an irreversible operation.

Routine reversible actions inside an already validated approach do not require a separate checkpoint.

## Assessment

### Outcome and Scope

- What observable outcome owns this work?
- Which requirements are current, and which items are current-state evidence or speculation?
- What non-goals and contracts must remain unchanged?
- Could reuse or no-change already satisfy the outcome?

### Evidence

- Which claims are observed, inferred, or unknown?
- What repository rule or pattern governs the next decision?
- Does an unknown change the outcome, scale, major design, authority, or verification?

### Approach

- Is the current route the smallest sufficient one?
- Does every added artifact, mechanism, test, gate, or task change the outcome, protect a boundary, serve a consumer, or supply necessary proof?
- What current evidence would make the approach invalid?

### Completion

- Is the requested result observable?
- Did the applicable established checks pass?
- Are verification gaps and residual limitations reported?
- Did review findings remain within approved scope?

## Decision

After assessment, choose one:

- **continue**: Current evidence supports the route.
- **adjust**: A reversible local change keeps the approved outcome intact.
- **return to owning phase**: Evidence invalidates a requirement, major design decision, task boundary, or verification strategy.
- **ask the user**: Progress requires a new requirement, scope change, unavailable authority, or unauthorized irreversible action.
- **complete**: The outcome and required proof are observable.

## Error Recovery

When an unexpected result occurs:

1. Identify the failed assumption or boundary.
2. Inspect the narrowest relevant repository evidence.
3. Prefer removing or correcting the invalid rule or implementation before adding a fallback.
4. Retry only when new evidence changes the attempt.
5. Ask the user only under the user-decision conditions above.

## Quality Check

- The checkpoint changed or validated a real decision.
- It did not create a status artifact solely to prove reflection occurred.
- It preserved the approved outcome and stopped generating work once proof was sufficient.
