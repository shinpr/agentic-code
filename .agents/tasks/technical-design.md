# Technical Design

## Purpose

Create the smallest durable design record needed for repository-grounded implementation and verification.

## Required Skills

- `.agents/skills/documentation-criteria/SKILL.md`
- `.agents/skills/implementation-approach/SKILL.md` for Medium/Large structural scale
- `.agents/skills/metacognition/SKILL.md`

## Required Inputs

- confirmed outcome, current requirements, and non-goals;
- related PRD when one governs the scope;
- relevant repository paths and accepted decisions;
- unknowns that can change the design.

## Completion Conditions

- The document path follows `documentation-criteria`.
- Every retained decision constrains implementation or verification.
- Existing patterns, contracts, callers, and integrations relevant to the change are represented.
- ADRs exist only for current-scope choices that pass both choice and durability filters.
- Acceptance criteria are observable and have a narrowest sufficient verification boundary.
- User approval is recorded for the implementation scope and major durable design decisions.

## Process

### 1. Confirm Governing Scope

Record the outcome, requirements, non-goals, constraints, and unresolved product questions. Use an existing approved PRD when it already carries the current scope.

### 2. Inspect Existing Evidence

Inspect only evidence that can change reuse, design validity, preserved contracts, dependency order, or verification:

- applicable project rules and accepted ADRs;
- relevant implementation paths, callers, and integration points;
- representative patterns and existing equivalent behavior;
- data or control flow across changed boundaries;
- current tests and available verification harnesses.

Mark evidence as observed, inferred, or unknown. An implicit local pattern may guide a reversible choice; user confirmation is required only when adopting it would change scope or a major durable decision.

### 3. Select Documents

Apply `.agents/skills/documentation-criteria/SKILL.md`:

- create an ADR only when the choice and durability filters both pass;
- create one ADR per independently durable decision point;
- keep evident or cheaply reversible implementation choices in the Design Doc;
- reuse existing accepted decisions when they still govern the change.

### 4. Select the Implementation Approach

Use `.agents/skills/implementation-approach/SKILL.md` to choose the direct implementation, verify where it fails current evidence, and add only targeted expansions that resolve those failures.

### 5. Define Observable Proof

For each acceptance criterion:

- name the behavior or contract to observe;
- select the narrowest sufficient local, integration, or E2E boundary;
- reuse existing proof where sufficient;
- identify any evidence unavailable until implementation.

## Design Doc Shape

```markdown
# Technical Design: [Feature]

## Overview
- Outcome:
- Requirements:
- Non-goals:
- Constraints:

## Governing Sources
- PRD / ADR / repository rules:

## Existing Evidence
- Observed paths, patterns, contracts, callers, and verification support
- Inferences and unknowns

## Design
- Selected approach and why the direct implementation is sufficient
- Added mechanisms and the failed requirement or constraint each resolves
- Responsibility boundaries, contracts, and integration points affected
- Real dependency order

## Acceptance Criteria and Verification
- [AC]: [observable result] → [narrowest sufficient proof]

## Risks and Open Questions
- Only material current-scope risks and decisions that can change implementation
```

Add diagrams, field-propagation maps, API matrices, or migration tables only when the relationship would otherwise be difficult for the next consumer to reconstruct.

## External Research

Use current primary sources when a new or changed dependency, security requirement, platform behavior, or version-specific contract cannot be determined from the repository. Record the decision-relevant fact and source rather than generic best-practice research.

## Quality Check

- No fixed option count created artificial ADR alternatives.
- No section exists only because a template offered it.
- Local reversible choices remain available to implementation.
- Every added mechanism and verification lane has a named current-scope effect.
