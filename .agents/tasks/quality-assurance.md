# Quality Assurance

## Purpose

Verify the completed change at the narrowest sufficient boundaries and run the repository's applicable established checks.

## Required Skills

- `.agents/skills/coding-rules/SKILL.md`
- `.agents/skills/testing/SKILL.md`
- `.agents/skills/metacognition/SKILL.md`

## Required Inputs

- requested outcome and non-goals;
- changed paths and affected contracts;
- focused verification selected by implementation or design;
- repository scripts, CI configuration, and contributor guidance.

## Process

### 1. Discover Applicable Checks

Identify checks the repository already establishes for the changed surface, such as focused tests, broader tests, build, type checking, linting, formatting, generated artifacts, or documented manual verification.

Do not infer universal coverage, complexity, runtime, performance, security, or deployment thresholds when the repository and approved requirements do not define them.

### 2. Run Focused Verification

Execute the proof that directly observes the requested behavior or preserved contract. Confirm that a passing result cannot hide the important failure named by the task.

### 3. Run Applicable Repository Checks

Run the established checks affected by the complete change. Fix failures caused by the current work. Distinguish pre-existing or unrelated failures and report them with evidence.

### 4. Check Scope and Documentation

Confirm:

- delivered behavior matches the approved outcome;
- non-goals and preserved contracts remain intact;
- no optional mechanism or unrelated cleanup entered the change;
- documentation consumed by an affected user or maintainer is current.

### 5. Report Gaps

When a relevant check or environment is unavailable, report what could not be verified and the resulting risk. Add new tooling or operational work only when the approved outcome or a demonstrated recurring failure requires it.

## Completion Conditions

- Focused verification observes the intended result.
- Applicable established checks pass, or unrelated failures are clearly separated.
- Scope and contract checks pass.
- Verification gaps and residual limitations are explicit.

## Output

```text
[QUALITY RESULT]
Focused verification:
- [command or method]: pass | fail | unavailable

Applicable repository checks:
- [command]: pass | fail | not applicable

Scope and contracts:
- [boundary]: preserved | changed as approved | issue

Remaining limitations:
- [evidence-backed gap or none]
```
