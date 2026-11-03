# Agentic Coding Workflow

## Purpose

Carry one coordinated outcome or several independently valuable outcomes from requirements through design, planning, implementation, and observable verification.

Use this workflow for Medium/Large structural scale after task analysis and the user's go-ahead for this route. Track progress internally; this file defines phase ownership and transition evidence.

## Operating Rules

- Load each phase's task definition and required skills when that phase starts.
- Create only artifacts and verification lanes required by the current outcome or a downstream consumer.
- A phase stop asks the user about the outcome or for authority, not for approval of technical means; revising a recorded technical choice afterward needs no new stop.

## Phase 0: Product Requirements [Large only]

Load `.agents/tasks/prd-creation.md` when multiple independently valuable outcomes need one product boundary.

### Result

- A PRD records the observable outcomes, current requirements, acceptance criteria, and user-decided exclusions.
- Current-state evidence and speculative ideas remain distinguishable from buildable scope.

### Transition Gate

Proceed after the user confirms the PRD's outcomes, requirements, and exclusions. If an existing PRD already carries the current scope, reuse it.

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

- Reuse an existing design when it fully governs the current change.
- Create ADRs only for current-scope choices that require judgment and remain durable.
- Create a Design Doc containing the repository-grounded implementation approach, affected contracts, real dependencies, and verification strategy.

### Transition Gate

Present the minimum user-visible value the design delivers and its major changes, including internal mechanism changes and ADR choices, and ask whether they match the user's intent. Continue when the user confirms; apply a correction through the owning phase.

## Phase 3: Acceptance Proof Selection

Load `.agents/tasks/acceptance-test-generation.md` when an acceptance criterion's behavior is observable at an integration or E2E boundary.

No new integration or E2E test is a valid result when existing tests, or unit tests of the logic involved, already own each claim.

## Phase 4: Work Planning

Load `.agents/tasks/work-planning.md`.

### Transition Gate

Proceed when the Work Plan covers the design's repository work and orders its real dependencies. Obtain the user's authorization to implement within this outcome unless the user already gave it. That authorization covers the whole implementation phase; later reviews and technical revisions do not reopen it.

## Phase 5: Implementation

Load `.agents/tasks/implementation.md` and execute each planned task.

## Phase 6: Quality Assurance

Load `.agents/tasks/quality-assurance.md`.

Run the applicable established checks against the complete change. Fix in-scope failures. Report unavailable checks and residual limitations without creating new infrastructure unless the outcome requires it.

### Completion Evidence

- requested behavior is observable;
- applicable repository checks pass;
- contracts and non-goals remain preserved;
- documentation used by an affected consumer is current;
- remaining limitations are reported.

## Phase 7: Review and Handoff

Review the completed change against the outcome, requirements, non-goals, and observable proof. Resolve each finding as AGENTS.md Review defines.

Repeat review only when an applied correction changes relevant evidence. A repeated preference without new evidence does not block completion.

## Final Handoff

Report:

- delivered outcome;
- changed files and artifacts;
- verification executed and results;
- applied and declined review findings when relevant;
- remaining limitations or user decisions.
