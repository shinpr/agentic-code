# Product Requirements Document Creation

## Purpose

Create or update a PRD when multiple independently valuable outcomes need one approved product boundary before separate design decisions.

## Required Skills

- `.agents/skills/documentation-criteria/SKILL.md`
- `.agents/skills/metacognition/SKILL.md`

## When to Use

Use for Large structural scale or when an existing product decision requires a durable PRD update. Reuse an existing approved PRD when it already represents the current request.

Bug fixes, internal refactoring, documentation-only work, and one coherent outcome do not require a PRD solely because their implementation surface is broad.

## Completion Conditions

- One or more observable product outcomes are explicit.
- Requirements distinguish current state, desired future, and speculation.
- Each buildable requirement serves an outcome.
- Non-goals are user-decided.
- Acceptance criteria and success evidence are observable.
- Unknown product decisions are visible.
- The user approves the product scope before it authorizes design.

## Process

### 1. Inspect Existing Product Context

Search related PRDs, designs, accepted decisions, and current product behavior. Extract only facts that change the outcome, scope, exclusions, or success evidence.

### 2. Converge Requirements

Record:

- observable outcomes;
- current requirements selected for this change;
- current-state evidence;
- speculative ideas that remain outside buildable scope;
- explicit non-goals;
- rough structural cost and unknowns.

Ask the user only when an unresolved item can change the outcome, current scope, exclusions, or acceptance evidence.

### 3. Add Supporting Research When Needed

Stakeholder, market, competitive, regulatory, or usage research is included only when it supplies a missing product decision or measurable success condition. Record unavailable evidence as an unknown rather than making research a universal gate.

## PRD Shape

```markdown
# PRD: [Feature]

## Outcome
- Observable product result

## Context
- Decision-relevant current-state evidence

## Requirements
- Desired future requirements for this change

## Future / Out of Scope
- User-decided non-goals and speculative ideas

## Acceptance Criteria
- Observable conditions that show each outcome is delivered

## Success Evidence
- Existing metric, test, user observation, or other required proof

## Risks and Open Questions
- Product decisions still capable of changing scope
```

Add personas, user stories, journeys, milestones, diagrams, competitor analysis, or KPI tables when they answer a current product question for the PRD's consumer.

## Quality Check

- The PRD fixes product scope rather than prescribing implementation.
- Research and sections have named decision effects.
- Speculation does not become buildable scope.
- The document stops when design can proceed without inferring product decisions.
