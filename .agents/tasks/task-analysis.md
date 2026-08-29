# Task Analysis

## Purpose

Determine the requested outcome, structural scale, applicable task definition, required skills, and the smallest sufficient execution path.

## Required Rules

- Keep `.agents/skills/metacognition/SKILL.md` active.
- Read `.agents/context-maps/task-skills-matrix.yaml` when selecting task-specific skills.

## Completion Conditions

- Task type and intended outcome are explicit.
- Current requirements and non-goals are distinguished from observations and speculation.
- Structural scale is supported by repository evidence.
- The selected task definition and required skills are identified.
- Success criteria and verification boundaries are observable.
- Unknowns that change the outcome, scale, authority, or execution path are resolved or returned to the user.

## Process

### 1. Confirm the Outcome

Record:

- one observable outcome;
- requirements that must be delivered now;
- explicit non-goals;
- supplied constraints and authority boundaries;
- whether no-change or reuse could satisfy the request.

Treat current-state descriptions and speculative ideas as evidence, not buildable scope, unless the user selected them as requirements.

### 2. Classify the Task

| Type | Use when |
|------|----------|
| Implementation | Creating or modifying code or configuration |
| Debugging | Finding the cause of incorrect behavior |
| Refactoring | Improving structure while preserving behavior |
| Research | Gathering repository or external evidence |
| Design | Selecting and documenting a technical approach |
| Documentation | Creating or updating user-facing or project documentation |
| Review | Evaluating code, tests, or documents without applying changes |

When the requested action changes during execution, re-run the classification before crossing into the new task type.

### 3. Inspect the Change Surface

Perform the shallowest inspection that can establish:

- relevant paths, components, and responsibility boundaries;
- public or shared contracts and callers;
- integrations, persisted data, and dependency platforms;
- existing equivalent behavior or representative patterns;
- existing verification support;
- unknowns that could change the route.

Mark evidence as `observed`, `inferred`, or `unknown`. File count may describe the surface but does not determine scale.

### 4. Determine Structural Scale

| Scale | Structural condition |
|-------|----------------------|
| Small | One coherent outcome follows existing patterns within one responsibility boundary |
| Medium | One coherent outcome coordinates across a boundary or requires a durable design decision |
| Large | Multiple independently valuable outcomes require separate design decisions |

A durable design decision materially changes a responsibility, dependency direction, shared contract, persistence model, technology dependency, reversibility, or lifecycle cost that future work must preserve.

Multiple files or layers serving one coherent outcome remain Medium. Large applies only when separate outcomes require separate design decisions.

Record scale confidence as:

- `confirmed` when inspected evidence determines the route;
- `provisional` when a named unknown could change it.

### 5. Select the Task and Skills

1. Read `.agents/context-maps/task-skills-matrix.yaml`.
2. Match the task type to its required skills.
3. Add `implementation-approach` for Medium/Large implementation or design work.
4. Load each selected skill at the point where its rules affect the next decision.
5. Record why each selected skill changes execution or verification.

Scale alone does not load coding or testing skills for research, review, or documentation tasks.

### 6. Select the Execution Path

- **Small**: Load the owning task definition and execute directly.
- **Medium/Large**: Recommend `.agents/workflows/agentic-coding.md` and obtain user approval before starting it.

Use a task-specific direct path when the user requests only research, review, or documentation and no implementation workflow is needed to produce the requested result.

### 7. Define Completion Evidence

Specify:

- the observable result;
- the narrowest sufficient verification method;
- applicable repository checks;
- user decisions or authority still required;
- the stopping condition.

Do not create a document, test lane, approval record, or mitigation solely because it is available in a template.

## Output

```text
[TASK ANALYSIS]
Task Type: [type]
Outcome: [observable result]
Requirements: [current requirements]
Non-goals: [explicit exclusions]
Structural Scale: Small | Medium | Large
Scale Confidence: confirmed | provisional

Change-Surface Evidence:
- [observed path, boundary, contract, caller, integration, or verification support]

Unknowns:
- [unknown and the decision it could change]

Execution Path:
- [direct task definition or agentic-coding workflow]

Required Skills:
- [skill path]: [execution or verification effect]

Completion Evidence:
- [observable check and stopping condition]
```

## Quality Check

- The route follows structural decisions rather than file count.
- Every requirement serves the outcome.
- Every required skill affects a current decision or check.
- Reuse, no-change, and direct execution remain available when evidence supports them.
- User questions are reserved for outcome-changing or authority-bound decisions.
