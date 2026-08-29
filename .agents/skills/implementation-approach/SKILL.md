---
name: implementation-approach
description: "Selects the smallest sufficient implementation strategy and verification boundary from current requirements and repository evidence."
---

# Implementation Approach

## Strategy Selection

Use this sequence when a design or task needs an implementation approach:

1. **Current evidence**: Inspect the relevant responsibility, data or control path, representative repository pattern, and constraints that can change the choice.
2. **Direct implementation**: Describe the simplest end-to-end change that delivers the confirmed outcome through the existing architecture and dependencies.
3. **Failure check**: Test the direct implementation against current requirements, verified constraints, observed problems, and evidence-backed material risks within scope.
4. **Targeted expansion**: Add only what resolves a failed item. Compare the smaller design with and without the addition.
5. **Value and subtraction check**: Retain an addition only when evidence shows that its outcome benefit justifies its implementation, testing, documentation, runtime, and maintenance cost.

Possible future reuse, generic best practice, speculative edge cases, and optional hardening are not failed items. File count is supporting evidence, not a strategy rule.

Keep unselected candidates in the active execution context. Create a durable artifact only for a named downstream consumer.

## Slicing Choice

Choose the smallest structure that preserves real dependency order and yields observable progress:

- **Vertical**: One user- or consumer-visible outcome can be completed across its layers without first creating a shared foundation.
- **Foundation-first**: Multiple required outcomes depend on the same contract or mechanism that must exist before any can work.
- **Hybrid**: One verified shared dependency comes first, followed by outcome-oriented slices.

Create phases from verified dependencies rather than architecture layers. Keep independently executable work separate when combining it would obscure ownership or verification.

## Verification Level

Select the narrowest level that exercises the boundary named by the requirement:

- **L1: Local**: A unit, pure transformation, local command, build, or artifact check.
- **L2: Integration**: Interaction across components, persistence, processes, or another named integration boundary.
- **L3: End-to-end**: The complete user, browser, process, or service journey required by the acceptance criterion.

A broader check does not replace required focused proof, and a focused check does not prove a wider boundary. Prefer observable operation, then a focused test, then build or static evidence when each is applicable.

## Completion Check

- The approach delivers the confirmed outcome through existing patterns where sufficient.
- Every added mechanism resolves a current failed item.
- Task order follows verified dependencies rather than hypothetical rollout needs.
- Verification exercises the required observable boundary without adding an unnecessary wider lane.
