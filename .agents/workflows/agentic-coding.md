# Agentic Coding Workflow

## Purpose

Carry one coordinated outcome or several independently valuable outcomes from confirmed scope through design, planning, implementation, and observable verification.

Use this workflow for Medium/Large structural scale after task analysis and user approval. Track progress internally; this file defines phase ownership and transition evidence.

## Operating Rules

- Preserve the confirmed outcome, current requirements, non-goals, and repository contracts.
- Load each phase's task definition and required skills when that phase starts.
- Treat semantically equivalent evidence as satisfying a gate unless a machine consumes an exact schema.
- Resolve reversible repository-local choices from evidence.
- Ask the user only for a new product requirement, a scope change, a major approved design change, unavailable authority, or an unauthorized irreversible action.
- Create only artifacts and verification lanes required by the current outcome or a downstream consumer.

## Phase 0: Product Requirements [Large only]

Load `.agents/tasks/prd-creation.md` when multiple independently valuable outcomes need one approved product boundary.

### Result

- A PRD records the observable outcomes, current requirements, acceptance criteria, and user-decided exclusions.
- Current-state evidence and speculative ideas remain distinguishable from buildable scope.

### Transition Gate

Proceed after the user approves the product scope. If an existing approved PRD already carries the current scope, reuse it.

## Phase 1: Requirements Confirmation

Confirm:

- the observable outcome;
- requirements to deliver now;
- explicit non-goals;
- relevant repository evidence;
- rough structural cost and unknowns.

Ask only about unresolved inputs that could change the outcome, structural scale, authority, or document path.

## Phase 2: Technical Design

Load `.agents/tasks/technical-design.md` and the skills it selects.

### Result

- Reuse an existing approved design when it fully governs the current change.
- Create ADRs only for current-scope choices that require judgment and remain durable.
- Create a Design Doc containing the repository-grounded implementation approach, affected contracts, real dependencies, and verification strategy.

### Transition Gate

Proceed after the user approves the implementation scope and any major durable design decisions. Local reversible choices remain implementation decisions.

## Phase 3: Acceptance Proof Selection

Load `.agents/tasks/acceptance-test-generation.md` when the approved design selects an integration or E2E boundary as the narrowest sufficient proof for an acceptance criterion.

### Selection Rule

1. Reuse existing proof when it already observes the required behavior.
2. Prefer the cheapest test level that observes the boundary.
3. Generate a skeleton only when the repository's established pattern or the next planning consumer needs one.
4. Record why selected proof is necessary and why a cheaper boundary is insufficient.

Some changes require no new integration or E2E test. That is a valid result when focused unit checks or existing coverage provide sufficient proof.

## Phase 4: Work Planning

Load `.agents/tasks/work-planning.md`.

Create the fewest tasks that preserve real dependencies and observable verification. Each task records:

- governing source;
- intended result;
- affected responsibility or paths;
- dependencies that make ordering necessary;
- executable verification.

Use an existing selected test skeleton in the earliest task that can make its boundary executable. Shared infrastructure comes first only when that proof cannot run without it.

### Transition Gate

Proceed when the Work Plan represents the approved implementation scope, all real dependencies are ordered, and the user approves the plan when it fixes decisions or scope not already approved.

## Phase 5: Implementation

Load `.agents/tasks/implementation.md` and execute each planned task.

For each task:

1. Confirm its source, result, dependencies, and verification.
2. Implement the smallest change that produces the result.
3. Use TDD when the behavior change can be represented by a failing test.
4. Run focused verification and applicable repository checks.
5. Update progress after the task satisfies its exit evidence.

When new evidence invalidates the planned result or a major design decision, return to the owning phase. Repository-local corrections that preserve scope remain in implementation.

## Phase 6: Quality Assurance

Load `.agents/tasks/quality-assurance.md`.

Run the applicable established checks against the complete change. Fix in-scope failures. Report unavailable checks and residual limitations without creating new infrastructure unless the approved outcome requires it.

### Completion Evidence

- requested behavior is observable;
- applicable repository checks pass;
- approved contracts and non-goals remain preserved;
- documentation used by an affected consumer is current;
- remaining limitations are reported.

## Phase 7: Review and Handoff

Review the completed change against the approved scope and observable proof.

Resolve each finding as:

- **apply** when it is required by correctness, confirmed requirements, accepted design, or repository rules;
- **decline** when it adds optional scope, reverses a non-goal, duplicates proof, or lacks an observable effect worth its cost;
- **user decision** when it changes the product outcome or a major approved decision.

Repeat review only when an applied correction changes relevant evidence. A repeated preference without new evidence does not block completion.

## Final Handoff

Report:

- delivered outcome;
- changed files and artifacts;
- verification executed and results;
- applied and declined review findings when relevant;
- remaining limitations or user decisions.
