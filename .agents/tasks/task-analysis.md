# Task Analysis

## Purpose

Analyze user requests to determine task type, scale, and required resources for accurate execution.

## When to Use

- At the start of any user request
- When task scope is unclear
- When switching to a different type of work

## Completion Conditions

□ Task type identified (implementation/research/design/documentation/debugging/other)
□ Task scale determined:
  - Small: 1-2 files affected
  - Medium: 3-5 files affected
  - Large: 6+ files affected
□ Required resources identified:
  - Rules needed
  - External dependencies
  - Existing code to reference
□ Success criteria defined (measurable)
□ Constraints and assumptions documented

## Execution Guidelines

### 1. Understand Request Essence

Ask yourself:
- What is the user truly trying to achieve?
- Is this a symptom or the actual goal?
- What similar tasks have been done before?

### 2. Classify Task Type

**Implementation**: Creating or modifying code
- New features
- Bug fixes
- Refactoring
- Performance optimization

**Research**: Information gathering
- Code exploration
- Architecture analysis
- Feasibility studies

**Design**: Planning and documentation
- Technical specifications
- Architecture decisions
- API design

**Documentation**: Writing docs
- README updates
- API documentation
- User guides

**Debugging**: Problem solving
- Error investigation
- Performance analysis
- Behavior diagnosis

### 3. Estimate Scale

Count affected components:
- Number of files to create/modify
- Number of systems/modules involved
- Integration complexity
- Testing requirements

### 4. Identify Resources

Determine what's needed:
- Which rule files apply
- External libraries/tools
- Reference implementations
- Documentation sources

### 5. Define Success Criteria

Make it measurable:
- Specific functionality works
- Tests pass
- Performance metrics met
- Documentation complete

## Deliverables

None directly - this task clarifies what needs to be done.

## Common Patterns

### Feature Request
1. Identify core functionality
2. Estimate component changes
3. Consider edge cases
4. Plan testing approach

### Bug Fix
1. Understand expected vs actual behavior
2. Identify affected components
3. Determine root cause approach
4. Plan verification method

### Refactoring
1. Identify improvement goals
2. Assess current structure
3. Estimate change scope
4. Plan incremental approach

## Decision Tree

```
Is it code-related?
├─ YES: Is it creating new code?
│   ├─ YES: Implementation task
│   └─ NO: Is it fixing issues?
│       ├─ YES: Debugging task
│       └─ NO: Refactoring task
└─ NO: Is it information gathering?
    ├─ YES: Research task
    └─ NO: Is it planning?
        ├─ YES: Design task
        └─ NO: Documentation task
```

## Notes

- This analysis guides all subsequent work
- Be thorough but efficient
- Ask user for clarification when ambiguous
- Document assumptions made