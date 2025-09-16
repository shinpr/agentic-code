# Work Planning

## Purpose

Create structured work plans with decomposed tasks for systematic implementation.

## When to Use

- Medium/Large scale tasks (3+ files)
- Complex features requiring phased approach
- When user chooses Agentic Coding workflow
- Refactoring with multiple components

## Completion Conditions

□ Work plan document created
□ Tasks decomposed to appropriate granularity
□ Dependencies identified and ordered
□ Each task has clear completion criteria
□ Verification methods defined
□ Risk factors documented

## Execution Guidelines

### 1. Plan Structure

Create work plan with:
- **Overview**: What's being built/changed
- **Phases**: Logical groupings of work
- **Tasks**: Individual implementation units
- **Dependencies**: What must complete before what
- **Risks**: Potential issues and mitigations

### 2. Task Decomposition Principles

**Granularity**: 1 task = 1 logical unit (ideally 1 commit)
- Small: 1-2 files (recommended)
- Medium: 3-5 files (acceptable)
- Large: 6+ files (must split)

**Independence**: Each task should be:
- Independently verifiable
- Rollback-safe (can revert without breaking)
- Clear in scope

### 3. Task Format

```markdown
## Task N: [Task Name]

### Scope
- Files affected:
- Components involved:

### Implementation Steps
1. Specific step 1
2. Specific step 2
3. ...

### Verification
- How to verify it works
- What tests to run
- Expected behavior

### Completion Criteria
□ Functionality implemented
□ Tests pass
□ No regressions
□ Documentation updated (if needed)

### Dependencies
- Depends on: Task X
- Blocks: Task Y
```

### 4. Ordering Strategy

1. **Foundation first**: Core structures before features
2. **Dependencies respected**: Prerequisites before dependents
3. **Testability maintained**: Each step verifiable
4. **Risk front-loaded**: Complex/uncertain parts early

### 5. Common Patterns

**Feature Implementation**
```
Phase 1: Data layer
- Task 1: Define data models
- Task 2: Create repositories

Phase 2: Business logic
- Task 3: Implement services
- Task 4: Add validation

Phase 3: Interface
- Task 5: Create API endpoints
- Task 6: Add error handling

Phase 4: Testing
- Task 7: Unit tests
- Task 8: Integration tests
```

**Refactoring**
```
Phase 1: Preparation
- Task 1: Add tests for current behavior
- Task 2: Create abstraction interfaces

Phase 2: Migration
- Task 3: Implement new structure
- Task 4: Migrate component by component

Phase 3: Cleanup
- Task 5: Remove old code
- Task 6: Update documentation
```

## Deliverables

Work plan document containing:
- Task breakdown with clear scope
- Execution order
- Verification methods
- Risk mitigation strategies

## Quality Criteria

Good tasks are:
- **Atomic**: Single logical change
- **Measurable**: Clear completion criteria
- **Testable**: Verification method defined
- **Ordered**: Dependencies respected
- **Sized**: 1-2 files preferred

## Anti-Patterns

Avoid:
- Vague tasks ("Improve performance")
- Giant tasks (10+ files)
- Circular dependencies
- Missing verification methods
- Unclear completion criteria

## Notes

- This planning enables systematic execution
- Each task should be completable in one session
- Document assumptions and decisions
- Update plan if requirements change
- Consider rollback scenarios