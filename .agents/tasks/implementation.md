# Implementation

## Purpose

Implement the task result with the smallest sufficient change and observable verification.

## Required Skills

- `.agents/skills/coding-rules/SKILL.md`
- `.agents/skills/testing/SKILL.md`
- `.agents/skills/ai-development-guide/SKILL.md` for debugging, refactoring, or impact analysis
- `.agents/skills/metacognition/SKILL.md`

## Entry Conditions

- The task's governing source, result, scope, dependencies, and verification are known.
- Required predecessor tasks are complete.
- Outcome-changing unknowns and authority boundaries are resolved.

## Process

### 1. Confirm Current Evidence

Inspect the target paths, representative patterns, callers, contracts, and existing tests needed to execute the task. Reuse existing behavior when it already satisfies the result.

### 2. Implement

- Prove each changed behavioral claim with its owning test as `testing` defines.
- Follow existing repository patterns and accepted design decisions.
- Add only mechanisms required by the task result or a demonstrated constraint.
- Keep recorded non-goals outside implementation.

### 3. Resolve New Evidence

- Fix repository-local implementation problems that preserve the task result.
- When evidence invalidates a design or plan choice, update that document, affected tasks, and proof, then continue.
- Return other changes to the user as AGENTS.md Operating Boundaries states.

### 4. Verify

Run the owning tests and applicable established repository checks. Fix in-scope failures. Report unavailable verification and remaining limitations.

### 5. Complete

Update task progress after exit evidence is satisfied.

## Exit Conditions

- The task result is observable.
- Applicable repository checks pass.
- Preserved contracts and non-goals remain intact.
- No unrelated implementation or speculative hardening was added.
- Verification gaps and residual risks are reported.
