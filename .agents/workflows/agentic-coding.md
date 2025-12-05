# Agentic Coding Workflow

**When to use**: Medium/Large scale tasks (3+ files) after task-analysis.md recommendation. User approval required before starting.

Track progress internally - do not update this file.

## Workflow Overview

Execute phases sequentially. For Large scale (6+ files), include PRD phase.

## Phase 0: PRD Creation (Large scale only)

### Pre-Phase Gates [BLOCKING - CANNOT PROCEED WITHOUT]:
1. **[VERIFY PLAN INJECTION]** Confirm work plan contains ALL required BLOCKING READs for this phase
   - If missing any: HALT - Return to task-analysis.md Step 8
2. **[BLOCKING READ]** Execute Read on `.agents/tasks/prd-creation.md`
3. **[VERIFY]** prd-creation.md is ACTIVE in working memory
4. **[VERIFY]** All rules required by prd-creation.md are LOADED (per its Required Rules section)
5. **[VERIFY]** Plan Injection from prd-creation.md completed
6. **[CONFIRM]** Entry gates in prd-creation.md are satisfied

**ENFORCEMENT**: NO requirements work until prd-creation.md confirmed active and Plan Injection verified

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

### STOP POINT: PRD Review [BLOCKING GATE]
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
1. **[VERIFY PLAN INJECTION]** Confirm work plan contains ALL required BLOCKING READs for this phase
   - If missing any: HALT - Return to task-analysis.md Step 8
2. **[BLOCKING READ]** Execute Read on `.agents/tasks/technical-design.md`
3. **[VERIFY]** technical-design.md is ACTIVE in working memory
4. **[VERIFY]** All rules required by technical-design.md are LOADED (per its Required Rules section)
5. **[CONFIRM]** Entry gates in technical-design.md are satisfied

**ENFORCEMENT**:
- NO design work until technical-design.md confirmed active
- NO proceeding without Plan Injection verification for ALL BLOCKING READs

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

### STOP POINT: Design Review [BLOCKING GATE]
**SYSTEM HALT - CANNOT PROCEED WITHOUT:**
1. Design document EXISTS at `docs/design/[feature]-design.md`
2. **[VERIFY COMPLIANCE]** Design doc meets ALL requirements from technical-design.md:
   - All Completion Conditions from technical-design.md satisfied
   - All sections required by technical-design.md present
   - If non-compliant: REJECT - Return to Phase 2
3. User EXPLICITLY states approval ("yes", "approved", "大丈夫", etc.)
4. ADR created if new technology introduced

**ENFORCEMENT:**
- NO implementation code until approval received
- NO proceeding without full task definition compliance
- NO skipping even for "simple" changes
- VIOLATION = Return to design phase

## Phase 3: Acceptance Test Generation

**PHASE ORDERING RATIONALE**: Test skeletons MUST be generated BEFORE work planning. Test structures define verification boundaries that determine task decomposition granularity. Work plans depend on these test specifications to map implementation units to concrete verification points.

### Pre-Phase Gates [BLOCKING - CANNOT PROCEED WITHOUT]:
1. **[VERIFY PLAN INJECTION]** Confirm work plan contains ALL required BLOCKING READs for this phase
   - If missing any: HALT - Return to task-analysis.md Step 8
2. **[BLOCKING READ]** Execute Read on `.agents/tasks/acceptance-test-generation.md`
3. **[VERIFY]** acceptance-test-generation.md is ACTIVE in working memory
4. **[VERIFY]** All rules required by acceptance-test-generation.md are LOADED (per its Required Rules section)
5. **[VERIFY]** Plan Injection from acceptance-test-generation.md completed
6. **[CONFIRM]** Entry gates in acceptance-test-generation.md are satisfied
7. **[VERIFY]** Design document EXISTS and contains Acceptance Criteria section

**ENFORCEMENT**: NO test generation until acceptance-test-generation.md confirmed active and Plan Injection verified

### Internal Checklist:
```
□ Design document Acceptance Criteria analyzed
□ Multi-dimensional requirements mapped
□ Integration test skeletons generated
□ E2E test skeletons generated
□ Test priorities assigned using risk analysis
□ Verification points documented
□ Traceability matrix created
□ Edge cases systematically identified
```

### Deliverable:
- Integration test skeletons with pending/placeholder markers
- E2E test skeletons with pending/placeholder markers
- Traceability matrix linking tests to ACs

### Completion Conditions:
- All ACs mapped to test cases
- Test framework conventions followed
- Test priorities align with business risk
- Verification points clearly documented

### STOP POINT: Test Skeleton Review [BLOCKING GATE]
**SYSTEM HALT - CANNOT PROCEED WITHOUT:**
1. Test skeletons EXIST in appropriate test directories
2. **[VERIFY COMPLIANCE]** Test generation meets ALL requirements from acceptance-test-generation.md:
   - All Completion Conditions from acceptance-test-generation.md satisfied
   - Test framework conventions followed
   - Traceability matrix complete
   - If non-compliant: REJECT - Return to Phase 3
3. User EXPLICITLY states approval on test coverage approach
4. Generated tests follow existing project patterns

**ENFORCEMENT:**
- NO work planning until test skeletons approved
- NO proceeding without test generation compliance
- VIOLATION = Return to test generation phase

## Phase 4: Work Planning

**PHASE DEPENDENCY**: This phase REQUIRES completed test skeletons from Phase 3. Task decomposition uses test verification points as boundaries for work units. Each implementation task maps to specific test cases for validation.

### Pre-Phase Gates [BLOCKING - CANNOT PROCEED WITHOUT]:
1. **[VERIFY PLAN INJECTION]** Confirm work plan contains ALL required BLOCKING READs for this phase
   - If missing any: HALT - Return to task-analysis.md Step 8
2. **[BLOCKING READ]** Execute Read on `.agents/tasks/work-planning.md`
3. **[VERIFY]** work-planning.md is ACTIVE in working memory
4. **[VERIFY]** All rules required by work-planning.md are LOADED (per its Required Rules section)
5. **[VERIFY]** Plan Injection from work-planning.md completed
6. **[CONFIRM]** Entry gates in work-planning.md are satisfied
7. **[VERIFY]** Design document APPROVED by user
8. **[VERIFY]** Test skeletons from Phase 3 EXIST in test directories

**ENFORCEMENT**: NO work plan creation until work-planning.md confirmed active and Plan Injection verified

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

### STOP POINT: Work Plan Approval [BLOCKING GATE]
**SYSTEM HALT - CANNOT WRITE CODE WITHOUT:**
1. Work plan document EXISTS at `docs/plans/YYYYMMDD-{type}-{description}.md`
2. **[VERIFY INJECTION]** Plan MUST contain ALL BLOCKING READs identified in task-analysis Step 8:
   - Every BLOCKING READ from workflow phases
   - Every BLOCKING READ from task definitions
   - Every BLOCKING READ from required rules
   - Each marked with source: "[From Plan Injection]"
3. Each task has MEASURABLE completion criteria
4. User EXPLICITLY approves plan

**GATE VERIFICATION:**
```
Plan Location: docs/plans/[filename].md
Task Count: [N] tasks defined
BLOCKING READs in plan: [count] items
Plan Injection Status: [COMPLETE/INCOMPLETE]
User Approval: [AWAITING/RECEIVED]
```

**ENFORCEMENT:**
- First line of code PROHIBITED until approval
- Missing ANY BLOCKING READ = Return to task-analysis Step 8

## Phase 5: Implementation

### Pre-Implementation Gates [BLOCKING - CANNOT START WITHOUT]:
```
1. [VERIFY PLAN INJECTION] Confirm work plan contains ALL required BLOCKING READs for this phase
   - If missing any: HALT - Return to task-analysis.md Step 8
2. [BLOCKING READ] Execute Read on `.agents/tasks/implementation.md`
3. [VERIFY] implementation.md is ACTIVE in working memory
4. [VERIFY] All rules required by implementation.md are LOADED (per its Required Rules section)
5. [VERIFY] Plan Injection from implementation.md completed
6. [CONFIRM] Entry gates in implementation.md are satisfied
7. [VERIFY] Work plan document EXISTS and has been APPROVED
8. [CONFIRM] Current task identified from work plan
```

**CRITICAL ENFORCEMENT**:
- ZERO lines of code until implementation.md confirmed active
- First code attempt without gates = IMMEDIATE DELETION
- Violation logged and requires restart from Phase 5 gates

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

### Guidelines:
- Complete one task fully before starting next
- Test each component as implemented
- Document significant decisions
- Ask user when blocked

## Phase 6: Quality Assurance

### Pre-Phase Gates [BLOCKING - CANNOT PROCEED WITHOUT]:
1. **[VERIFY PLAN INJECTION]** Confirm work plan contains ALL required BLOCKING READs for this phase
   - If missing any: HALT - Return to task-analysis.md Step 8
2. **[BLOCKING READ]** Execute Read on `.agents/tasks/quality-assurance.md`
3. **[VERIFY]** quality-assurance.md is ACTIVE in working memory
4. **[VERIFY]** All rules required by quality-assurance.md are LOADED (per its Required Rules section)
5. **[VERIFY]** Plan Injection from quality-assurance.md completed
6. **[CONFIRM]** All implementation tasks marked complete in work plan

**ENFORCEMENT**: NO quality checks until quality-assurance.md confirmed active and Plan Injection verified

### Internal Checklist:
```
□ All tasks completed
□ Build succeeds
□ Tests pass
□ Linting clean
□ Documentation updated
□ Edge cases handled
□ Integration/E2E test review passed (via integration-test-review.md)
```

### Completion Conditions:
- All quality standards met
- No known bugs remain
- Code is production-ready

## Phase 7: Review and Handoff

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