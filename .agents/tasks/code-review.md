# Code Review

## Purpose

Evaluate a completed implementation against confirmed requirements, accepted design, repository rules, and observable correctness without expanding the approved outcome.

## Required Skills

- `.agents/skills/coding-rules/SKILL.md`
- `.agents/skills/ai-development-guide/SKILL.md`
- `.agents/skills/metacognition/SKILL.md`

## Required Inputs

- implementation paths or change diff;
- confirmed requirements and non-goals;
- Design Doc or ADRs when they govern the change;
- verification evidence and known limitations.

## Review Process

1. Confirm the review boundary and governing sources.
2. Inspect changed behavior, affected callers, contracts, error paths, and tests.
3. Verify that the supplied proof observes the behavior it claims to prove.
4. Record only findings with an observable correctness, contract, security, maintainability, or scope effect.
5. Distinguish repository observations from inferences and unknowns.

Generic preferences, optional hardening, broad cleanup, and speculative future risks are not blocking findings.

## Finding Shape

```text
Finding: [stable ID]
Severity: high | medium | low
Location: [path:line or symbol]
Evidence: [observed repository fact]
Effect: [requirement, contract, correctness, security, maintainability, or scope impact]
Disposition candidate: apply | decline | user decision
```

Use severity for impact, not implementation effort:

- **high**: Requested behavior, a preserved contract, data/security boundary, or completion proof is invalid.
- **medium**: A current-scope defect or maintainability problem has a concrete failure path.
- **low**: A bounded improvement has evidence but does not invalidate the delivered outcome.

## Review Result

- `approved`: No high or medium finding blocks the outcome.
- `needs_revision`: At least one evidence-backed high or medium finding requires resolution.
- `blocked`: Governing scope or required evidence is unavailable, so correctness cannot be judged.

The receiving agent resolves each finding:

- **apply** when required by correctness, confirmed requirements, accepted design, or repository rules;
- **decline** when it adds optional scope, reverses a non-goal, duplicates proof, or lacks an effect worth its cost;
- **user decision** when it changes the product outcome or a major approved decision.

Repeat review only when an applied correction changes relevant evidence.

## Output

```text
[REVIEW RESULT]
Boundary: [reviewed change]
Governing sources: [paths or requirements]
Verdict: approved | needs_revision | blocked

Findings:
- [finding shape]

Limitations:
- [unavailable evidence or none]
```
