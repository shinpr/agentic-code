---
name: ai-development-guide
description: "Applies root-cause analysis, impact inspection, and completeness checks without expanding approved scope. Use when fixing bugs, refactoring, reviewing quality, or resolving unexpected implementation evidence."
---

# AI Development Guide

## Core Rule

Correct the invalid source before adding compensating layers. A workaround, fallback, abstraction, or new artifact is justified only when current evidence shows that removing or fixing the cause cannot satisfy the approved outcome.

## Investigation

Inspect the smallest relevant path that can establish:

- expected versus actual behavior;
- the first failing boundary;
- callers, contracts, and data or control flow affected;
- existing equivalent behavior and representative repository patterns;
- tests and checks that can reproduce or observe the issue;
- unknowns that could change the fix.

Mark findings as observed, inferred, or unknown. Expand inspection when new evidence points to another affected boundary, not to satisfy a fixed coverage checklist.

## Root-Cause Resolution

1. Reproduce or otherwise observe the failure.
2. Identify the earliest invalid assumption, state, or contract.
3. Determine whether existing code, configuration, or documentation already provides the correct mechanism.
4. Fix or remove the invalid source.
5. Add a focused regression proof when it protects the demonstrated failure from recurrence.

Use a minimal reproduction or iterative why-analysis when it changes the cause decision. Do not create either as a ceremonial artifact.

## Existing Mechanism Decision

When similar functionality exists:

- reuse it when its responsibility, lifecycle, and contract fit the current outcome;
- extend it when the extension preserves its responsibility and remains cheaper than a parallel mechanism;
- replace or remove it when evidence shows it is broken or unused;
- create a new mechanism only when the current ones cannot satisfy the approved requirement.

Technical debt discovered outside the current outcome remains a finding, not an automatic ADR or implementation task.

## Fallbacks

Prefer explicit failure with preserved error context. Add fallback behavior only when a current requirement defines the degraded outcome or evidence shows continuity is necessary. Verify that the fallback is observable and does not hide the original failure.

## Impact and Completeness

Before completion, verify the affected boundary:

- direct implementation and callers;
- shared contracts or persisted shapes touched by the change;
- focused tests and applicable repository checks;
- documentation consumed by affected users or maintainers.

The impact record can remain in the active execution context. Create a separate report only for a named downstream consumer.

## Refactoring

- Preserve observable behavior and accepted contracts.
- Remove unused or broken paths when evidence shows they no longer serve a current consumer.
- Extract shared code when multiple callers have the same responsibility and change pressure, not at a universal duplication count.
- Measure before performance optimization.

## Completion Check

- The change addresses the demonstrated cause or approved refactoring outcome.
- No fallback or abstraction masks an unfixed source.
- No side finding became unapproved work.
- Verification observes the affected boundary.
