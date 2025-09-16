# Agentic Coding Workflow

Design-driven development workflow for medium/large scale tasks. Track progress internally - do not update this file.

## Workflow Overview

Execute phases sequentially. Track completion internally using checklist format.

## Phase 1: Requirements Analysis

### Internal Checklist:
```
□ User requirements documented
□ Functional requirements listed
□ Non-functional requirements identified
□ Constraints and assumptions noted
□ Success criteria defined
```

### Completion Conditions:
- All aspects of requirements are clear
- Ambiguities resolved through user questions
- Scope boundaries defined

## Phase 2: Technical Design

Load: `.agents/tasks/technical-design.md`

### Internal Checklist:
```
□ Architecture approach selected
□ Component structure designed
□ Data flow documented
□ Integration points identified
□ Technology choices justified
□ Error handling strategy defined
```

### Deliverable:
- Design document in `docs/design/`

### Completion Conditions:
- Design covers all requirements
- Technical approach is clear
- Implementation path is defined

## Phase 3: Work Planning

Load: `.agents/tasks/work-planning.md`

### Internal Checklist:
```
□ Tasks decomposed into units
□ Dependencies identified
□ Execution order determined
□ Each task has clear completion criteria
□ Risk factors noted
```

### Deliverable:
- Work plan document with task list

### Task Breakdown Format:
```
1. [Task Name]
   - Files affected:
   - Dependencies:
   - Completion: When [specific condition]
   - Status: [ ] Pending
```

## Phase 4: Implementation

Load: `.agents/rules/language/rules.md`

### Execution Pattern:
```
For each task in work plan:
  1. Mark task as in progress (internally)
  2. Load relevant rules
  3. Implement following guidelines
  4. Verify completion conditions
  5. Mark task complete (internally)
  6. Proceed to next task
```

### Internal Progress Tracking:
```
Task 1: [✓] Complete
Task 2: [→] In Progress
Task 3: [ ] Pending
Task 4: [ ] Pending
```

### Guidelines:
- Complete one task fully before starting next
- Test each component as implemented
- Document significant decisions
- Ask user when blocked

## Phase 5: Quality Assurance

Load: `.agents/tasks/quality-assurance.md`

### Internal Checklist:
```
□ All tasks completed
□ Build succeeds
□ Tests pass
□ Linting clean
□ Documentation updated
□ Edge cases handled
```

### Completion Conditions:
- All quality standards met
- No known bugs remain
- Code is production-ready

## Phase 6: Review and Handoff

### Internal Checklist:
```
□ Implementation matches design
□ All requirements fulfilled
□ Documentation complete
□ Known limitations documented
□ Setup instructions provided
```

### Final Deliverables:
- Working implementation
- Updated documentation
- Test suite
- Setup/deployment instructions

## Decision Points

### When to Skip Phases:

**Skip Design Phase if:**
- Implementation approach is obvious
- Similar pattern exists in codebase
- User provides specific implementation details

**Skip Work Planning if:**
- Task has < 5 implementation units
- Dependencies are straightforward
- Sequential implementation is clear

## Error Handling

### When Blocked:
1. Document blocking issue
2. Identify alternatives
3. Present options to user
4. Wait for decision

### When Design Needs Change:
1. Stop implementation
2. Document needed changes
3. Update design document
4. Revise work plan
5. Resume implementation

## Progress Reporting

Periodically update user with:
- Current phase
- Tasks completed / total
- Any blockers
- Estimated remaining work

Example:
```
"Phase 4: Implementation
Progress: 3/7 tasks complete
Currently: Implementing authentication middleware
No blockers"
```

## Important Notes

1. **Internal tracking only** - Never update this file with progress
2. **Sequential execution** - Cannot parallelize without sub-agents
3. **User context management** - Ask user if context seems full
4. **Explicit handoffs** - Clear completion criteria for each phase