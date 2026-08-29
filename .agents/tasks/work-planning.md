# Work Planning

## Purpose

Create the fewest executable implementation tasks that preserve the approved scope, real dependency order, and observable proof.

## Required Skills

- `.agents/skills/documentation-criteria/SKILL.md`
- `.agents/skills/implementation-approach/SKILL.md`
- `.agents/skills/testing/SKILL.md`
- `.agents/skills/metacognition/SKILL.md`

## Required Inputs

- approved Design Doc or equivalent governing source;
- selected acceptance proof, including existing tests or an explicit no-new-test result;
- repository commands and task dependencies established by evidence.

## Completion Conditions

- Every task traces to an approved outcome, requirement, design section, or required correction.
- Task boundaries follow coherent results and real dependencies rather than file count.
- Each task has an executable verification method.
- Existing selected test skeletons are consumed at the earliest task that can make their boundary executable.
- The plan contains no optional hardening, speculative infrastructure, or duplicated proof.

## Process

1. Extract the approved implementation outcomes and dependency constraints.
2. Choose vertical, foundation-first, or hybrid slicing from `implementation-approach`.
3. Create the fewest independently executable tasks that keep the repository in a valid state.
4. Attach the narrowest verification that proves each task result.
5. Order tasks by verified dependencies. Shared infrastructure precedes an outcome only when that outcome cannot work without it.
6. Compare the final plan with non-goals and remove unsupported work.

File count and architecture layers do not define task boundaries.

## Task Shape

```markdown
### [Task ID]: [Coherent result]

- **Source**: [Design Doc section, acceptance criterion, or approved correction]
- **Result**: [Observable implementation outcome]
- **Scope**: [Responsibilities and expected paths]
- **Depends on**: [Real prerequisite or none]
- **Verification**: [Executable focused proof and applicable checks]
- **Status**: [ ] Pending
```

Add a verification focus only when a check could pass without proving one important required behavior.

## Storage

Store Work Plans at `docs/plans/YYYYMMDD-{type}-{description}.md`. They are transient execution state unless the repository explicitly versions them.

## Quality Check

- Every task changes the outcome, protects a boundary, serves a consumer, or supplies necessary proof.
- No task exists only to satisfy a phase template.
- Combining or splitting tasks would not improve dependency clarity or verification.
- The plan stops when all approved outcomes have an executable path to proof.
