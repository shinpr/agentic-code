# Implementation

## Purpose

Implement the confirmed task result with the smallest sufficient change and observable verification.

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

- Use TDD when the behavior change can be represented by a focused failing test.
- Follow existing repository patterns and accepted design decisions.
- Add only mechanisms required by the task result or a demonstrated constraint.
- Keep recorded non-goals outside implementation.

### 3. Resolve New Evidence

- Fix repository-local implementation problems that preserve the approved result.
- Return to design when evidence invalidates a major approved decision.
- Return to the user when progress requires a new requirement, scope change, unavailable authority, or unauthorized irreversible action.

### 4. Verify

Run the focused proof and applicable established repository checks. Fix in-scope failures. Report unavailable verification and remaining limitations.

### 5. Complete

Update task progress after exit evidence is satisfied.

## Exit Conditions

- The task result is observable.
- Applicable repository checks pass.
- Preserved contracts and non-goals remain intact.
- No unrelated implementation or speculative hardening was added.
- Verification gaps and residual risks are reported.
