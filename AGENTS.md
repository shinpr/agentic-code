# AGENTS.md

## ABSOLUTE PRINCIPLES

1. **EXECUTE all rules and requirements in task/rule files - no exceptions**
2. **COMPLETE all entry and exit conditions for every task**
3. **STOP at gates - proceed only when conditions are met**

## Initial Setup [FIRST TIME ONLY]

**Complete before any other operation:**
1. Execute `date` command → Store as SESSION_BASELINE_DATE
2. Apply `.agents/rules/core/metacognition.md` → Keep active entire session
3. Use SESSION_BASELINE_DATE for all date references (WebSearch, docs, etc.)
4. Verify project structure with `ls -la`

## Core Execution Principle

**Universal Entry Point**: Every request starts with task-analysis.md to determine the appropriate path.

## Task Analysis - Required First Step

**ALWAYS start here for any user request:**
1. Apply `.agents/tasks/task-analysis.md`
2. Follow its output to select the appropriate path:

### Path Selection Based on Task Analysis

**Small Scale (1-2 files) / Single Task:**
- Load specific task definition (e.g., implementation.md, technical-design.md)
- Execute that task definition directly
- No workflow needed

**Medium/Large Scale (3+ files) / Complex Task:**
- Follow task-analysis.md recommendation for workflow selection

## Core Principles

### Plan Injection [MANDATORY ENFORCEMENT]
**All tasks require Plan Injection for BLOCKING READs:**
- Task-analysis.md Step 8 scans and identifies ALL BLOCKING READ requirements
- Work plans MUST contain every BLOCKING READ from workflow/tasks/rules
- Each phase verifies its BLOCKING READs are in the plan
- Gates verify Plan Injection evidence before proceeding
- Missing ANY BLOCKING READ = IMMEDIATE HALT

### Task Definition Loading
**Task definitions define WHAT to build - never skip them:**
- Verify entry gates before proceeding
- Follow Required Rules section in each task definition

### Rule Application
**Apply rules based on task type from task-analysis:**
- Rules are loaded progressively as needed
- Each task definition specifies its required rules
- Unload task-specific rules after completion

### Quality Standards
**Before marking any task complete:**
- All tests pass (when applicable)
- All quality checks return 0 errors
- Task exit conditions are satisfied
- Work documented as needed

## Approval Points

**Principle**: Get user approval at significant milestones.

Common approval points:
- When recommending a workflow for Medium/Large tasks
- After creating design or decision documents
- When technical approach changes significantly
- At task definition specified stop points

**VIOLATIONS TO PREVENT:**
- Work plan without ALL BLOCKING READs = RETURN TO TASK ANALYSIS
- Skipping ANY BLOCKING READ = IMMEDIATE HALT
- Proceeding without task definition compliance = BLOCKING ERROR

## Quality Standards

**Universal quality requirements:**
- Follow TDD process for all code changes
- All quality checks must pass with 0 errors
- Follow standards defined in language-specific rules
- Each task definition specifies its quality gates

## Metacognition Checkpoints

Perform self-assessment at these mandatory points:
- Task type changes
- Unexpected errors occur
- Completing a meaningful unit of work
- Before starting new implementation
- After completing each task from work plan

## Context Management

**Guidelines**:
- Load rules progressively, not all at once
- Unload task-specific rules after completion
- Keep only frequently-used rules loaded
- If context feels constrained, ask user for cleanup guidance

## Error Recovery

When stuck or encountering errors:
1. Re-read current task definition
2. Check if required rules are loaded
3. Look for anti-patterns in ai-development-guide.md
4. If unable to resolve, ask user for clarification

## File Organization

**Tasks** (.agents/tasks/):
- task-analysis.md: **Entry point**
- work-planning.md: Create work plans
- technical-design.md: Design documentation
- acceptance-test-generation.md: Test skeleton generation
- implementation.md: Implementation guidelines
- quality-assurance.md: Quality standards

**Workflows** (.agents/workflows/):
- agentic-coding.md: Medium/Large scale workflow

**Context Maps** (.agents/context-maps/):
- task-rule-matrix.yaml: Task-to-rule mappings

**Core Rules** (.agents/rules/core/):
- metacognition.md: Self-assessment
- ai-development-guide.md: Anti-patterns
- documentation-criteria.md: Documentation criteria

**Language Rules** (.agents/rules/language/):
- rules.md: Development rules
- testing.md: Testing standards

**Contextual Rules** (.agents/rules/contextual/):
- architecture/: Implementation approaches

## Anti-Patterns to Avoid

1. **Skipping task-analysis.md** → ALWAYS start with task analysis
2. **Loading all rules upfront** → Load progressively based on task needs
3. **Ignoring task entry/exit conditions** → Verify gates at each step
4. **Working without task definitions** → Task definitions define WHAT to build
6. **Assuming workflow is always needed** → Small tasks can use direct task definitions
7. **Premature workflow selection** → Let task-analysis determine the approach

## Success Metrics

Track internally:
- Task completion rate
- Rules actually used vs loaded
- Quality checks passing rate (should be 100%)
- Appropriate path selection (direct vs workflow)