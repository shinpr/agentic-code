# Agentic Coding Workflow

**When to use**: Medium/Large scale tasks (3+ files) after task-analysis.md recommendation. User approval required before starting.

Track progress internally - do not update this file.

## Workflow Overview

Execute phases sequentially. For Large scale (6+ files), include PRD phase.

## Phase 0: PRD Creation (Large scale only)

### Pre-Phase Gates [BLOCKING - CANNOT PROCEED WITHOUT]:
1. **[BLOCKING READ]** Execute Read on `.agents/tasks/prd-creation.md`
2. **[VERIFY]** prd-creation.md is ACTIVE in working memory
3. **[VERIFY]** All rules required by prd-creation.md are LOADED
4. **[CONFIRM]** Entry gates in prd-creation.md are satisfied

**ENFORCEMENT**: NO requirements work until prd-creation.md confirmed active

### Internal Checklist:
```
□ Target users identified
□ User stories documented
□ Success metrics defined
□ Scope boundaries clear
□ MoSCoW prioritization complete
```

### Deliverable:
- PRD document in `docs/prd/[feature-name]-prd.md`

### Completion Conditions:
- Business value articulated
- User requirements clear
- Success criteria measurable

### 🛑 STOP POINT: PRD Review [BLOCKING GATE]
**SYSTEM HALT - CANNOT PROCEED WITHOUT:**
1. PRD document EXISTS at `docs/prd/[feature]-prd.md`
2. User EXPLICITLY states approval
3. All requirements understood

**ENFORCEMENT:**
- NO technical design until PRD approved
- VIOLATION = Return to PRD phase

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

### Pre-Phase Gates [BLOCKING - CANNOT PROCEED WITHOUT]:
1. **[BLOCKING READ]** Execute Read on `.agents/tasks/technical-design.md`
2. **[VERIFY]** technical-design.md is ACTIVE in working memory
3. **[VERIFY]** All rules required by technical-design.md are LOADED
4. **[CONFIRM]** Entry gates in technical-design.md are satisfied

**ENFORCEMENT**: NO design work until technical-design.md confirmed active

### Pre-Design Requirements:
```
□ Check for need of technology decision documentation
□ Perform existing code investigation
□ Research latest information online
□ Document user agreements
```

### Internal Checklist:
```
□ Technology decisions documented if needed (refer to technical-design.md)
□ Architecture approach selected
□ Component structure designed
□ Data flow documented
□ Integration points identified
□ Technology choices justified
□ Error handling strategy defined
□ References cited with URLs
```

### Deliverable:
- Technology decision documents in `docs/adr/` (if needed)
- Design document in `docs/design/`

### Completion Conditions:
- Design covers all requirements
- Technical approach is clear
- Implementation path is defined
- Latest best practices researched

### 🛑 STOP POINT: Design Review [BLOCKING GATE]
**SYSTEM HALT - CANNOT PROCEED WITHOUT:**
1. Design document EXISTS at `docs/design/[feature]-design.md`
2. User EXPLICITLY states approval ("yes", "approved", "大丈夫", etc.)
3. ADR created if new technology introduced

**ENFORCEMENT:**
- NO implementation code until approval received
- NO skipping even for "simple" changes
- VIOLATION = Return to design phase

## Phase 3: Work Planning

### Pre-Phase Gates [BLOCKING - CANNOT PROCEED WITHOUT]:
1. **[BLOCKING READ]** Execute Read on `.agents/tasks/work-planning.md`
2. **[VERIFY]** work-planning.md is ACTIVE in working memory
3. **[VERIFY]** All rules required by work-planning.md are LOADED
4. **[CONFIRM]** Entry gates in work-planning.md are satisfied
5. **[VERIFY]** Design document APPROVED by user

**ENFORCEMENT**: NO work plan creation until work-planning.md confirmed active

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

### 🛑 STOP POINT: Work Plan Approval [BLOCKING GATE]
**SYSTEM HALT - CANNOT WRITE CODE WITHOUT:**
1. Work plan document EXISTS at `docs/plans/YYYYMMDD-{type}-{description}.md`
2. Each task has MEASURABLE completion criteria
3. User EXPLICITLY approves plan

**GATE VERIFICATION:**
```
Plan Location: docs/plans/[filename].md
Task Count: [N] tasks defined
User Approval: [AWAITING/RECEIVED]
```

**ENFORCEMENT:** First line of code PROHIBITED until approval

## Phase 4: Implementation

### Pre-Implementation Gates [BLOCKING - CANNOT START WITHOUT]:
```
1. [BLOCKING READ] Execute Read on `.agents/tasks/implementation.md`
2. [VERIFY] implementation.md is ACTIVE in working memory
3. [VERIFY] All rules required by implementation.md are LOADED (will be loaded by implementation.md itself)
4. [CONFIRM] Entry gates in implementation.md are satisfied
5. [VERIFY] Work plan document EXISTS and has been APPROVED
6. [CONFIRM] Current task identified from work plan
```

**CRITICAL ENFORCEMENT**:
- ZERO lines of code until implementation.md confirmed active
- First code attempt without gates = IMMEDIATE DELETION
- Violation logged and requires restart from Phase 4 gates

### Execution Pattern [ENFORCED SEQUENCE]:
```
For each task in work plan:
  1. [METACOGNITION PRE] Execute "When Starting Work" checklist from metacognition protocol
  2. [TRACKING] Mark task as in_progress in task tracking
  3. [IMPLEMENT] Write code following ALL loaded rules (TDD: RED-GREEN-REFACTOR)
  4. [VERIFY] Run ALL quality check commands - MUST have 0 errors
  5. [COMMIT] Git commit with descriptive message for this task
  6. [UPDATE] Mark task checkbox complete [x] in work plan document
  7. [GATE CHECK] ALL completion criteria must pass
  8. [METACOGNITION POST] Execute "After Completion" checklist
  9. [TRACKING] Mark task complete in task tracking
  10. [CHECKPOINT] Cannot start next task until all steps complete
```

**ENFORCEMENT:**
- Skipping ANY step = RESTART task
- No code without implementation.md loaded
- No task transition without metacognition

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

### Pre-Phase Gates [BLOCKING - CANNOT PROCEED WITHOUT]:
1. **[BLOCKING READ]** Execute Read on `.agents/tasks/quality-assurance.md`
2. **[VERIFY]** quality-assurance.md is ACTIVE in working memory
3. **[VERIFY]** All rules required by quality-assurance.md are LOADED
4. **[CONFIRM]** All implementation tasks marked complete in work plan

**ENFORCEMENT**: NO quality checks until quality-assurance.md confirmed active

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