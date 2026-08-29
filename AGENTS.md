# AGENTS.md

## Goal

Use the repository's task definitions and skills to complete the requested outcome with the minimum sufficient work and observable verification.

## Operating Boundaries

- Preserve confirmed requirements, explicit non-goals, repository contracts, and user authority.
- Treat reuse and no-change as valid conclusions when repository evidence shows the outcome is already satisfied.
- Require user approval when the product outcome, scope, a major durable design decision, or an irreversible external state would change.
- Consider work complete when the requested behavior is observable through the narrowest sufficient verification boundary.

## Session Setup

For repository work:

1. Inspect the project structure.
2. Load `.agents/skills/metacognition/SKILL.md` and keep it active for the session.

## Task Routing

Before loading `task-analysis.md`, check whether repository inspection is needed to decide how to execute the request.

- If not, execute the request directly.
- If yes, load `.agents/tasks/task-analysis.md` and use its result to select the path.

### Small / Single Task

- Load the task definition that owns the requested result.
- Load only the skills required for the current decision or action.
- Execute directly without the workflow.

### Medium / Large Work

- Follow `.agents/workflows/agentic-coding.md` after the user approves the recommended path.
- Medium means one coherent outcome coordinates across a responsibility boundary or requires a durable design decision.
- Large means multiple independently valuable outcomes require separate design decisions.
- File count is supporting evidence, not the scale rule.

## Task Definitions and Skills

- Task definitions describe the result, required inputs, execution criteria, and completion evidence for one kind of work.
- Skills supply reusable judgment and quality rules.
- Read a task or skill at the point where its rules affect the next decision; do not preload future phases.
- When a task names required skills, confirm they are active before executing that task.

## Gates and Escalation

A gate is justified when it protects:

- user authority;
- an irreversible action;
- confirmed requirements or a major durable design decision;
- a machine-consumed contract;
- observable completion evidence.

Accept semantically equivalent evidence unless software requires an exact schema. Resolve reversible repository-local ambiguity from available evidence. Ask the user when proceeding requires a new product requirement, a scope change, a major approved design change, authority only the user holds, or an irreversible action the user did not authorize.

## Implementation and Verification

- Follow repository patterns and existing contracts.
- Use TDD when a behavior change can be represented by a failing test.
- Select the narrowest established test or check that observes the required boundary.
- Run applicable repository checks before completion.
- Report unavailable verification or residual risk rather than creating unrequested infrastructure.

## Review

Treat review findings as candidates:

- **Apply** findings required by confirmed requirements, repository rules, accepted design, or observable correctness.
- **Decline** findings that add optional scope, reverse a non-goal, duplicate proof, or cost more than their observable effect justifies.
- **Return for user decision** findings that change the product outcome or a major approved decision.

A repeated preference without new evidence does not block progress.

## Completion

Before marking work complete:

- confirm the requested outcome and task exit conditions;
- run the applicable repository checks;
- record verification evidence and remaining limitations;
- update required documentation when the change affects its consumer.

## File Organization

- `.agents/tasks/` — task definitions
- `.agents/workflows/agentic-coding.md` — coordinated Medium/Large workflow
- `.agents/skills/` — reusable decision and quality rules
- `.agents/context-maps/task-skills-matrix.yaml` — task-to-skill mapping
